<?php

namespace App\Http\Controllers\API\V1;

use Cache;
use Exception;
use Carbon\Carbon;
use App\Models\User;
use League\Flysystem\Util;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserCollection;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\API\V1\StoreUserRequest;
use App\Http\Requests\API\V1\UpdateUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $result = new UserCollection(User::all());
        }catch(Exception $e){
            return response()->json(['status' => 404, 'errors' => $e], 404);
        }
        return response()->json(['status' => 200, 'data' => $result], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * TODO зачем мне store, если можно обойтись авторизацией и update??????
     */
    public function store(StoreUserRequest $request)
    {
        $store = new User($request->all());

        $store->nickname = $request->nickname;
        $store->firstname = $request->firstname;
        $store->lastname = $request->lastname;

        $store->gender = $request->gender;
        $store->birtday = $request->birtday;

        $path = $request->file('avatar')->store('uploads/avatar', 'public');
        $path_normalize = Util::normalizePath($path);
        $store->avatar = Storage::url($path_normalize);
        
        $store->email = $request->email;
        $store->telephone = $request->telephone;

        $store->description = $request->description;
        $store->location = $request->location;

        $store->password = Hash::make($request->password);

        if(!$store->save()){
            return response()->json(['status' => 404, 'created' => 'failed'], 404);
        }
       
        return response()->json(['status' => 201, 'created' => 'success', 'data' => $store], 201);
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $key = 'user_' . $id;

            $user = Cache::tags(['user'])->remember($key, Carbon::now()->addMinutes(10), function() use($id){
               return new UserResource(User::findOrFail($id));
            }); 
        }catch(Exception $e){
            return response()->json(['status' => 404, 'errors' => $e->getMessage()], 404);
        }
        return response()->json(['status' => 200, 'data' => $user], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, $id)
    {
        //TODO доработать проверку как при добавлении пользователя
        $result = User::findorFail($id);

dd($request->hasFile('avatar'));

        if($request->password){
            $result->password = Hash::make($request->password);
        }
        if($request->firstname){
            $result->firstname = $request->firstname;
        }
        if($request->lastname){
            $result->lastname = $request->lastname;
        }
        //TODO из-за метода put пришлось перенести в отдельный контроллер замену аватарки
        // if($request->hasFile('avatar')){
        //     $path = $request->file('avatar')->store('uploads/avatar', 'public');
        //     $path_normalize = Util::normalizePath($path);
        //     $result->avatar = Storage::url($path_normalize);
        // }
        if($request->email){ 
            $result->email = $request->email;
        }
        if($request->telephone){
            $result->telephone = $request->telephone;
        }
        if($request->description){
            $result->description = $request->description;  
        }
        if($request->location){
            $result->location = $request->location;
        }
        if($request->gender){
            $result->gender = $request->gender;
        }
        if($request->birtday){
            $result->birtday = $request->birtday;
        }

        if(!$result->save()){
            return response()->json(['status' => 404, 'update' => 'failed'], 404);
        }

        return response()->json(['status' => 200, 'update' => 'success', 'data' => $result], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //TODO! надо реализовать при мягком удалении, удаление картинок пользователя
        $user->deleteOrFail();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
