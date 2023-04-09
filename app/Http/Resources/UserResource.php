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
            'id' => $this->id,
            'nickname' => $this->nickname,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'avatar' => $this->avatar,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at, 
            'telephone' => $this->telephone,
            'description' => $this->description,
            'location' => $this->location,
            'active' => $this->active,
            'admin' => $this->admin,
            'created_at' => $this->created_at,
            'posts' => PostResource::collection($this->posts),
        ];
    }
}
