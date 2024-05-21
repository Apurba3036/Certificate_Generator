<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table='students_info';

    protected $fillable=[
        'name',
        'Department',
        'ID',
        'CGPA',
        'Passing_year'

    ];
}
