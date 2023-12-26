<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Your existing post routes
Route::get('post/all', [PostController::class, 'index']);
Route::post('/post/add', [PostController::class, 'addPost']);
Route::get('post/edit/{id}', [PostController::class,'edit']);
Route::post('post/update/{id}', [PostController::class,'update']);
Route::delete('post/delete/{id}', [PostController::class,'delete']);
Route::get('/post/read/{id}', [PostController::class, 'read']);

// Authentication routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Protected routes requiring authentication
Route::middleware('auth:sanctum')->group(function () {
    // Add your authenticated routes here
});
