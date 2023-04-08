<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->from(1000);

            $table->string('nickname', 50);
            $table->string('firstname', 20)->nullable();
            $table->string('lastname', 30)->nullable();
            $table->string('avatar')->nullable();
            
            $table->string('email', 50)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('telephone', 15)->nullable();

            $table->string('description', 500)->nullable();
            $table->string('location')->nullable();

            $table->boolean('active')->default(true);
            $table->boolean('admin')->default(false);

            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
