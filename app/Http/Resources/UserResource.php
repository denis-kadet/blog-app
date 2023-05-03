<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'user_id' => $this->id,
            'nickname' => $this->nickname,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'gender' => $this->gender,
            'birtday' => $this->birtday,
            'avatar' => $this->avatar,
            'email' => $this->email,
            'telephone' => $this->telephone,
            'description' => $this->description,
            'location' => $this->location,
            'admin' => $this->admin,
            // 'posts' => PostResource::collection($this->posts),
        ];
    }
}
