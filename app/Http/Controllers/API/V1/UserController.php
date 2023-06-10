<?php

namespace App\Http\Controllers\API\V1;

use Cache;
use Exception;
use Carbon\Carbon;
use App\Models\User;
use App\Services\userService;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
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
        try {
            $result = new UserCollection(User::all());
        } catch (Exception $e) {
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
    public function store(StoreUserRequest $request, UserService $userService)
    {
        try {
            $user = $userService->storeUser($request);
            return response()->json(['status' => 201, 'created' => 'success', 'data' => $user], 201);
        } catch (Exception $e) {
            return response()->json(['status' => 404, 'errors' => $e->getMessage()], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //TODO разобраться с кешем, то есть при добавлении нового пользователя он должен обновлятся 
        try {
            $key = 'user_' . $id;

            $user = Cache::tags(['user'])->remember($key, Carbon::now()->addMinutes(10), function () use ($id) {
                return new UserResource(User::findOrFail($id));
            });
        } catch (Exception $e) {
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
    public function update(UpdateUserRequest $request, $id, UserService $userService)
    {
        try {
            $result = $userService->UpdateUser($request->all(), $id);
            return response()->json(['status' => 200, 'update' => 'success', 'data' => $result], 200);
        } catch (Exception $e) {
            return response()->json(['status' => 404, 'errors' => $e->getMessage()], 404);
        }
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
