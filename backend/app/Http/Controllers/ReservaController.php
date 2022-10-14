<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservaController extends Controller
{
    public function fechas()
    {
        return DB::select("SELECT date(fechaInicio) as fecha FROM reservas GROUP BY date(fechaInicio)");
    }
    public function index()
    {
        return Reserva::with('doctor')->get();
    }
    public function show($fecha)
    {
        return Reserva::with('doctor')->whereDate('fechaInicio',$fecha)->get();
    }
    public function store(Request $request)
    {
        $reserva = Reserva::create($request->all());
        return response()->json($reserva, 200);
    }
    public function update(Request $request, Reserva $reserva)
    {
        $reserva->update($request->all());
        return response()->json($reserva, 200);
    }
    public function destroy(Reserva $reserva)
    {
        $reserva->delete();
        return response()->json($reserva, 200);
    }
}
