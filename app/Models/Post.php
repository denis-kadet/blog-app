<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
        'slug',
        'slug',
    ];


    /**
     * hidden
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * casts
     *
     * @var array
     */
    protected $casts = [
        'publushed_at' => 'datetime',
    ];

    /**
     * user
     *
     * @return BelongsTo
     */
    public  function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
