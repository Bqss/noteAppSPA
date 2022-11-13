<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        $validator = Validator::make($request ->all(), [
            "email" => ["required","email"] ,
            "password" => ["required"]
        ]);

        if($validator ->fails()){
            return Redirect::back()->withErrors($validator) -> with("status" , [
                "code" => 402 ,
                "msg" => "An error has encourec"
            ]);
        }

        $crescidental = [
            "email" => $request->email,
            "password" => $request->password
        ];

        if(Auth::attempt($crescidental,false)){
            $request->session()->regenerate();
            return Redirect::to("/")->with("status", [
                "code" => 201,
                "msg" => "Welcome"
            ]);
        }

        return Redirect::back()->with("status",[
            "code" => 402 ,
            "msg" => "Email or password is false"
        ]);

    }

    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Redirect::to("/login");
    }
}
