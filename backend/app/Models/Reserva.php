<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;
    protected $fillable=[
        'fechaInicio',
        'fechaFin',
        'estado',
        'cliente',
        'celular',
        'doctor_id',
    ];
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}
