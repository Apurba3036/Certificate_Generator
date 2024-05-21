<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/studentinfo', [StudentController::class, 'show']);


Route::get('/student',[StudentController::class,'index']);

Route::post('student/add',[StudentController::class,'store']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
