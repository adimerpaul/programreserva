<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index()
    {
        return Doctor::all();
    }
    public function store(Request $request)
    {
        $doctor = Doctor::create($request->all());
        return response()->json($doctor, 200);
    }
    public function update(Request $request, Doctor $doctor)
    {
        $doctor->update($request->all());
        return response()->json($doctor, 200);
    }
    public function destroy(Doctor $doctor)
    {
        $doctor->delete();
        return response()->json($doctor, 200);
    }
}
