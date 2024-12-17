import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit{
  
  students!: Student[];
  
  constructor(private studentService:StudentService, private router:Router){}

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    console.log("new list print");
    // console.log(typeof this.students[0].birthDate);
    
    
    this.studentService.getStudentsList().subscribe(data=>{//subscribe=>et of callbacks that 
      // define what should happen when the Observable emits values, completes, or encounters 
      // an error.

      this.students=data;
    })
  }

  updateStudent(id:number){
  // console.log(id);
  
    this.router.navigate(['api/updateStudent',id]);
  }
  deleteStudent(id:number){

    console.log(id);
    this.studentService.deleteStudent(id).subscribe(()=>{
      
      this.getStudents();
    }
    )
  }
  gotoStudentsList(){
    this.router.navigate(['api/getAllStudents']);
  }
}
