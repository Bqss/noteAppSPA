<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends Model 
{
    use HasFactory;
    protected $table ="user";
    protected $primaryKey = "id";
    public $incrementing = true;
    protected $timestamp = true;

    protected $fillable = [
        "username", 
        "password",
        "email"
    ];

}
