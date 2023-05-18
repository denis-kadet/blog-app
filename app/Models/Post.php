<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory, SoftDeletes;

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
     * dates
     * мягкое удаление
     * @var array
     */
    protected $dates = ['deleted_at'];

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
