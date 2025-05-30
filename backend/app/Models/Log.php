<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;
    protected $table = 'logs';

    protected $fillable = [
        'proceso',
        'tabla',
        'mensaje',
        'cant_registro',
        'cant_insertados',
        'cant_actualizados',
        'fecha',
        'fecha_inicio',
        'fecha_fin',
        'tiempo'
    ];
}
