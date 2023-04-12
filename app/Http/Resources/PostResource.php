<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'post_id' => $this->id,
            'publushed_at' => $this->publushed_at,
            'title' => $this->title,
            'content' => $this->content,
            'slug' => $this->slug,
            'count_view' => $this->count_view,
            'created_at' => $this->created_at, 
            'updated_at' => $this->updated_at,
        ];
    }
}
