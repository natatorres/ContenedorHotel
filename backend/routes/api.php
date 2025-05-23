<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HabitacionController;
use App\Http\Controllers\Api\HotelController;


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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth:api')->group(function () {
//     Route::post('hotels/{hotel}/habitaciones', [HabitacionController::class, 'store']);
//     Route::post('hotels', [HotelController::class, 'store']);
// });


    Route::post('hotels/{hotel}/habitaciones', [HabitacionController::class, 'store']);
    Route::post('hotels', [HotelController::class, 'store']);
    Route::get('hoteles', [HotelController::class, 'index']);


