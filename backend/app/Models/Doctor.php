<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'especialidad',
        'foto',
        'descripcion',
    ];
    public function reservas()
    {
        return $this->hasMany(Reserva::class);
    }
}
