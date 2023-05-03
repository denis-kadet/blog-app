<?php

namespace App\Http\Controllers\API\V1;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use App\Http\Requests\API\V1\StoreUserRequest;

class AuthController extends Controller
{
    use HasApiTokens;
    
    public function sign_up(StoreUserRequest $request)
    { 
        $user = new User($request->all());
        $user->nickname = $request->nickname;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        if (!$user->save()) {
            return response()->json(['status' => 404, 'created' => 'failed'], 404);
        }

        $token = $user->createToken('apiToken')->plainTextToken;

        return response()->json(['status' => 201, 'created' => 'success', 'data' => $user, 'token' =>  $token], 201);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string|max:50|bail',
            'password' => ['required','string','max:255','bail'],
        ]);

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response([
                'status' => 401,
                'msg' => 'Некорректный пароль',
                'success' => false
            ], 401);
        }

        $token = $user->createToken('apiToken')->plainTextToken;

        $res = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json(['status' => 201, 'created' => 'success', 'data' => $res], 201);
    }

    public function logout(Request $request)
    {
        auth('sanctum')->user()->tokens()->delete();
        return 'logged out';
    
    }
}
