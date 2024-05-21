<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{  
    
    public function index(){
        $student=Student::all();
        
        return response()->json(['student'=>$student],200);
    }
    
    public function show(Request $request)
    {
        // Retrieve the 'ID' query parameter from the URL
        $studentId = $request->query('ID');
    
        // Use the 'where' method to filter the student by ID
        $student = Student::where('ID', $studentId)->first();
    
        // Check if a student was found
        if ($student) {
            // Return the student information as a JSON response
            return response()->json(['student' => $student]);
        } else {
            // Return a not found response
            return response()->json(['message' => 'Student not found'], 404);
        }
    }
    
    
    public function store(Request $request){
       
       $request->validate([
        'name'=>'required|max:191',
        'department'=>'required|max:191',
        'ID'=>'required|max:191',
        'CGPA'=>'required|max:191',
        'Passing_year'=>'required|max:191',

       ]);

       $student=new Student;
       $student->name =$request->name;
       $student->department =$request->department;
       $student->ID =$request->ID;
       $student->CGPA =$request->CGPA;
       $student->Passing_year =$request->Passing_year;
       $student->save();
       return response()->json(['message'=>'Information added Successfully'],200);
         
    }
}
