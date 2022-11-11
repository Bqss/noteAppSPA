<?php

namespace App\Http\Controllers;

use App\Models\NoteModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function dashboard(Request $request){
        $notes = NoteModel::where("is_archived",false)->all();
        return Inertia::render("Dashboard" , [
            "notes" => $notes
        ]);
    }


}
