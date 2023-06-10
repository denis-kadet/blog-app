<?php

namespace App\Services;

use App\Models\User;
use League\Flysystem\Util;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File; 

class userService
{
    public function storeAvatar($avatar): ?string
    {

        if (!request()->hasFile('avatar')) {
            return null;
        }

        $path = $avatar->store('uploads/avatar', 'public');
        $path_normalize = Util::normalizePath($path);
        $avatar_url = Storage::url($path_normalize);

        return $avatar_url;
    }

    public function storeUser($userData): User
    {

        $store = User::create([
            'nickname' => $userData->nickname,
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

    public function UpdateUser($userData, $id): User
    {
        $result = User::findorFail($id);
        $userData['password'] = Hash::make($userData['password']);

        $result->update($userData);
        return $result;
    }

    public function updateAvatar($newAvatar)
    {
        if (!request()->hasFile('avatar')) {
            return null;
        }
        File::delete(public_path($newAvatar));
        $path = $newAvatar->store('uploads/avatar', 'public');
        $path_normalize = Util::normalizePath($path);
        $avatar_url = Storage::url($path_normalize);

        return $avatar_url;
    }
}
