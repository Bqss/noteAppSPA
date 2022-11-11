<?php

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
        Schema::create("user" , function(Blueprint $table){
            $table->id("id");
            $table->string("email",200);
            $table->string("username",50);
            $table->string("password",200);
            $table->timestampsTz();
            $table->rememberToken();

        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
};
