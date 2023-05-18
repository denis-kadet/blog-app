<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id')->from(1000);

            //Внешний ключ на таблицу users длинная запись
            //$table->bigInteger('user_id')->unsigned();
            //$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            //Короткая запись
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();

            $table->date('publushed_at')->nullable();

            $table->text('title', 200);
            $table->longText('content');

            $table->text('slug', 50);
            $table->integer('count_view');

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
        Schema::dropIfExists('posts');
    }
}
