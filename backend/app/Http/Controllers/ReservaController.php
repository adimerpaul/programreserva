<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use Illuminate\Http\Request;

class ReservaController extends Controller
{
    public function index()
    {
        return Reserva::with('doctor')->get();
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
