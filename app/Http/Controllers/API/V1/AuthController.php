<?php

namespace App\Http\Controllers\API\V1;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;
use App\Services\userService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\LoginResource;
use App\Http\Requests\API\V1\LoginUserRequest;
use App\Http\Requests\API\V1\StoreUserRequest;

class AuthController extends Controller
{
    use HasApiTokens;
    //TODO переименовать на signUpAuth
    public function sign_up(StoreUserRequest $request, UserService $userService)
    {
        try {
            $user = $userService->storeUser($request);
            $token = $user->createToken('apiToken')->plainTextToken;

            return response()->json(['status' => 201, 'created' => 'success', 'data' => $user, 'token' =>  $token], 201);
        } catch (Exception $e) {
            return response()->json(['status' => 422, 'errors' => $e->getMessage()], 422);
        }
    }
    //TODO переименовать на loginAuth
    public function login(LoginUserRequest $request)
    {
        try{
            $data = $request->validated();

            if (!Auth::attempt($data)) {
                return response()->json(['status' => 403, 'success' => 'false', 'errors' => 'Неверный email или пароль'], 403);
            }

            //генерирует новую сессию, чтобы предовратить фиксацию сессии
            $request->session()->regenerate();

            $user_arr = User::where('email', $data['email'])->first();

            if(!$user_arr){
                return response()->json(['status' => 403, 'success' => 'false', 'errors' => 'Неверный email или пароль'], 403);
            }
            
            $user = new LoginResource(User::findOrFail($user_arr->id));
    
            $token = $user->createToken('apiToken')->plainTextToken;
    
            $res = [
                'user' => $user,
                'token' => $token
            ];
            return response()->json(['status' => 201, 'success' => 'true', 'data' => $res], 201);
        }catch (Exception $e) {
            return response()->json(['status' => 422, 'success' => 'false', 'errors' => $e->getMessage()], 422);
        }
    }
    
    //TODO переименовать на logoutAuth
    public function logout(Request $request)
    {
        
        try {
            auth()->user()->tokens()->delete();

            $request->session()->invalidate();

            return response()->json(['status' => 205, 'success' => 'true', 'message' => 'Токен отозван'], 205);
        } catch (Exception $e) {
            return response()->json(['status' => 404, 'errors' => $e], 404);
        }
    }
}
