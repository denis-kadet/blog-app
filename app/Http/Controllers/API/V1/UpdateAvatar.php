<?php

namespace App\Http\Controllers\API\V1;

use App\Models\User;
use League\Flysystem\Util;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\API\V1\UpdateUserRequest;
use Illuminate\Support\Facades\File; 

class UpdateAvatar extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateUserRequest $request, $id)
    {
        
        $result = User::findorFail($id);
       
        if($request->hasfile('avatar')){
            //удаляем изображения, а затем добавляем новый
            File::delete(public_path($result->avatar));
            $path = $request->file('avatar')->store('uploads/avatar', 'public');
            $path_normalize = Util::normalizePath($path);
            $result->avatar = Storage::url($path_normalize);
        }
        if(!$result->save()){
            return response()->json(['status' => 404, 'update' => 'failed'], 404);
        }

        return response()->json(['status' => 200, 'update' => 'success', 'data' => $result], 200);
    }
}
