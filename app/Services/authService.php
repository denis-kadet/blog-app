<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class authService
{
    public function signUp($userData)
    {
        $user = User::create([
            'nickname' => $userData->nickname,
            'email' => $userData->email,
            'password' => Hash::make($userData->password),
        ]);
        return $user;
    }
}
