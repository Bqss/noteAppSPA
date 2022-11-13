<?php

use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware(['guest'])->group(function() {
    Route::get("/register", fn () => inertia("Register"));
    Route::post("/register", [UserController::class, "store"]);
    Route::get("/login", fn () => inertia("Login"));
    Route::post("/login", [AuthController::class, "login"]);
});


Route::middleware("auth") -> group(function () {
    Route::get("/", [NoteController::class, "index"]);
    Route::get('/archive', [ArchiveController::class, "index"]);
    Route::post("/", [NoteController::class, "store"]);
    Route::delete("/delete/{id}", [NoteController::class, "delete"]);
    Route::put("/archive", [NoteController::class, "archive"]);
    Route::get("/logout" , [AuthController::class ,"logout"]);
    Route::put("/unarchive" , [NoteController::class , "unarchive"]);
    Route::get("/detail" , [NoteController::class , "detail"]);
});
    




