<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\UpdateAvatar;
use App\Http\Controllers\API\V1\AuthController;
use App\Http\Controllers\API\V1\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//регистрация
Route::post('signup', [AuthController::class, 'sign_up'])->name('signup');
//авторизация
Route::post('login', [AuthController::class, 'login'])->name('login');

// Route::middleware('auth:sanctum')->group(function(){
    Route::post('users/{user}', [UpdateAvatar::class, '__invoke'])->name('users.updateavatar');
    Route::apiResource('users', UserController::class);
// });

Route::fallback(function(){
    return response()->json([
        'message' => 'Нет такой страницы. If error persists, contact info@website.com'], 404);
});

//выйти
Route::post('logout', [AuthController::class, 'logout']);