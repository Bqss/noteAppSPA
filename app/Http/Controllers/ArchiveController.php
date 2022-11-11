<?php

namespace App\Http\Controllers;

use App\Models\NoteModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArchiveController extends Controller
{
    public function index() {
        $notes = NoteModel::all()->where("is_archived",true);
        return Inertia::render("Archive",[
            "notes" => [...$notes]
        ]);
    }
}
