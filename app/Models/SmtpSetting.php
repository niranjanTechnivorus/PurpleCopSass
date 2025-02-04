<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmtpSetting extends Model
{
    use HasFactory;
    protected $fillable = ['host', 'port', 'username', 'password', 'encryption', 'created_by', 'updated_by'];
}
