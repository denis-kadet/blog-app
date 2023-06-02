<?php

namespace App\Services;

use App\Models\User;
use League\Flysystem\Util;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;


class userService
{
    public function storeAvatar($avatar): ?string
    {

        if (!request()->hasFile('avatar')) {
            return null;
        }

        $path = $avatar->store('uploads/avatar', 'public');
        $path_normalize = Util::normalizePath($path);
        $avatar1 = Storage::url($path_normalize);

        return $avatar1;
    }

    public function storeUser($userData): User
    {

        $store = User::create([
            'nickname' => $userData->email,
            'firstname' => $userData->firstname,
            'lastname' => $userData->lastname,

            'gender' => $userData->gender,
            'birtday' => $userData->birtday,

            'email' => $userData->email,
            'telephone' => $userData->telephone,
            'avatar' => $this->storeAvatar($userData->avatar),

            'description' => $userData->description,
            'location' => $userData->location,

            'password' => Hash::make($userData->password),
        ]);
        return $store;
    }
}
