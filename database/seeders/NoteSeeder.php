<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("note")->insert([
            "note_title" => "berjalan di atas gunung",
            "note_text" => "testing 1",
            "user_id" => 1 ,
            "is_archived" => false
        ]);
    }
}
