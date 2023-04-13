<?php

namespace App\Http\Controllers\API\V1;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserCollection;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = new UserCollection(User::all());
        return response()->json(['status' => 200, 'data' => $result], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $store = new User();

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

        $store->save();

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
        $result = new UserResource(User::findOrFail($id));
        return response()->json(['status' => 200, 'data' => $result], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $result = User::findorFail($id);
        $result->nickname = $request->nickname;
        $result->save();
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
        $user->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
