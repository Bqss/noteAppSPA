<?php

use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\NoteController;
// use App\Http\Controllers\PageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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


Route::get("/",[NoteController::class , "index"])->name("dashboard");
Route::get("/register", function () {
    return Inertia::render("Register");
});
// Route::get('/', function () {
//     return Inertia::render('Dashboard');
// });
Route::get('/archive', [ArchiveController::class ,"index"]);

Route::post("/",[NoteController::class ,"store"]);
Route::delete("/delete/{id}",[NoteController::class,"delete"]);
Route::put("/archive",[NoteController::class,"archive"]);




