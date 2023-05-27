<?php

namespace App\Http\Controllers\API\V1;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
            return response()->json(['status' => 422, 'created' => 'failed'], 422);
        }

        $token = $user->createToken('apiToken')->plainTextToken;

        return response()->json(['status' => 201, 'created' => 'success', 'data' => $user, 'token' =>  $token], 201);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string|max:50|bail',
            'password' => ['required', 'string', 'max:255', 'bail'],
        ]);

        //генерирует новую сессию, чтобы предовратить фиксацию сессии
        //TODO! рефакторинг данного кода
        if (Auth::attempt($data)) {

            $request->session()->regenerate();

            $user = User::where('email', $data['email'])->first();

            $token = $user->createToken('apiToken')->plainTextToken;

            $res = [
                'user' => $user,
                'token' => $token
            ];
            return response()->json(['status' => 201, 'success' => 'true', 'data' => $res], 201);
        } else {
            return response()->json(['status' => 403, 'auth' => 'false', 'errors' => 'Неверный email или пароль'], 403);
        }
    }

    public function logout(Request $request)
    {
        try {
            auth()->user()->tokens()->delete();

            $request->session()->invalidate();

            return response()->json(['status' => 205, 'auth' => 'false', 'message' => 'Токен отозван'], 205);
        } catch (Exception $e) {
            return response()->json(['status' => 404, 'errors' => $e], 404);
        }
    }
}
