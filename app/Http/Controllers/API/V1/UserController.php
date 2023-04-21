<?php

namespace App\Http\Controllers\API\V1;

use Cache;
use Exception;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserCollection;
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
     */
    public function store(StoreUserRequest $request)
    {
        $store = new User($request->all());

        $store->nickname = $request->nickname;
        $store->firstname = $request->firstname;
        $store->lastname = $request->lastname;
        $store->avatar = $request->avatar;
        $store->email = $request->email;
        $store->telephone = $request->telephone;
        $store->description = $request->description;
        $store->location = $request->location;
        $store->password = Hash::make($request->password);
        //TODO! он должен быть уникальный, не совпадать
        $store->remember_token = Str::random(10);

        if(!$store->save()){
            return response()->json(['status' => 404, 'created' => 'failed'], 404);
        }
       
        return response()->json(['status' => 201, 'created' => 'success'], 201);
       
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
        $result = User::findorFail($id);
        $result->firstname = $request->firstname;
        $result->lastname = $request->lastname;
        $result->avatar = $request->avatar;
        $result->email = $request->email;
        $result->telephone = $request->telephone;
        $result->description = $request->description;
        $result->location = $request->location;
        $result->password = Hash::make($request->password);
        

        if(!$result->save()){
            return response()->json(['status' => 404, 'update' => 'failed'], 404);
        }

        return response()->json(['status' => 200, 'update' => 'success'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->deleteOrFail();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
