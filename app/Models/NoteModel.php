<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoteModel extends Model
{
    use HasFactory;
    protected $table = "note";
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $timestamp = true;
    protected $fillable =[
        "note_title",
        "note_text",
        "user_id",
        "is_archived"
    ];
}
