<?php

use App\Models\UserModel;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("note", function(Blueprint $table) {
            $table->id("id");
            $table->string("note_title",50);
            $table->string("note_text",500);
            $table->boolean("is_archived");
            $table->timestamps();
            $table->foreignId("user_id")
            ->constrained("user");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
