<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nickname' => $this->faker->word(),
            'firstname' => $this->faker->firstName(),
            'lastname' => $this->faker->lastName(),
            'avatar' => $this->faker->imageUrl(640, 480, 'animals', true),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'telephone' => $this->faker->ean13(),
            'description' => $this->faker->paragraph(),
            'location' => $this->faker->country(),
            'active' => $this->faker->boolean(),
            'admin' => $this->faker->boolean(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'updated_at'=>now(),
            'created_at'=>now(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
