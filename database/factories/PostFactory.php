<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id'=> User::factory(),
            'publushed_at' => now(),
            'title' => $this->faker->realText($maxNbChars = 100, $indexSize = 2),
            'content' => $this->faker->paragraph(3),
            'slug' => $this->faker->slug(2, false),
            'count_view' => $this->faker->randomNumber(5, false),
        ];
    }
}
