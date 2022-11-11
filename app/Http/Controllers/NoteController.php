<?php

namespace App\Http\Controllers;

use App\Models\NoteModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index(){
        $notes = NoteModel::all()->where("is_archived",false);
        return Inertia::render("Dashboard", [
            "notes" => [...$notes]
        ]);
    }
    public function store(Request $request){

        $validator = Validator::make($request -> all() ,[
            "note_title" => ["required", "min:5"],
            "note_text" => ["required"]
        ]);

        if($validator -> fails()){
            return Redirect::back()->withErrors($validator)->with("status" , [
                "code" => 422 ,
                "msg" => "An error has encoured"
            ]);
        }
       
        NoteModel::create([
            ...$request->only("note_title", "note_text") ,
            "is_archived" => false ,
            "user_id" => 1
        ]);

        return Redirect("/")->with("status" , [
            "code" => 201 ,
            "msg" => "Note succesfully added"
        ]);
    }

    public function delete(Request $request ){
        $id = $request->id;
     
        NoteModel::where("id",$id) -> delete();
        return redirect("/") -> with("status" , [
            "code" => 201 ,
            "msg" => "Note successfully deleted"
        ]);
    }

    public function archive(Request $request){
        $id = $request -> query("id");
        NoteModel::where("id",$id) ->  update([
            "is_archived" => true
        ]);

        return redirect("/")->with("status", [
            "code" => 201,
            "msg" => "Note successfully archived"
        ]);

    }

    
}
