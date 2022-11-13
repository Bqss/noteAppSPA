<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function store(Request $request) {
       $validation = Validator::make($request -> all() , [
            "username" => ["required" ,"unique:user,username","min:5"] ,
            "email" => ["required", "unique:user,email","email"],
            "password" => ["required", Password::min(8)->letters()->numbers()->mixedCase()] ,
            "password_confirm" => ["required","same:password"]
        ]);

        if($validation -> fails()){
            return Redirect::back()->withErrors($validation)->with("status" , [
                "code" =>  422 ,
                "msg" => "Failed to register , something wrong :("
            ]);
        }

        UserModel::create([
            "username" => $request -> username,
            "email" => $request -> email ,
            "password" => Hash::make($request -> password)
        ]);
        return Redirect::to("/login")->with("status", [
            "code" =>  201,
            "msg" => "Register succes , login to continue"
        ]);
    }
}
