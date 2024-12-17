import { Component, OnInit } from '@angular/core';
import { Teacher } from '../Teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teacher.component.css']
})
export class AllTeachersComponent implements OnInit{
  
  teachers!: Teacher[];
  
  constructor(private teacherService:TeacherService, private router:Router){}

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers(){
    console.log("new list print");
    
    this.teacherService.getTechersList().subscribe(data=>{//subscribe=>et of callbacks that 
      // define what should happen when the Observable emits values, completes, or encounters 
      // an error.
      // console.log(data);
      
      
      this.teachers=data;
    })
  }

  updateTeacher(id:number){
    this.router.navigate(['api/updateTeacher',id]);
  }
  deleteTeacher(id:number){

    console.log(id);
    this.teacherService.deleteTeacher(id).subscribe(()=>{
      
      this.getTeachers();
    }
    )
  }
  gotoTeachersList(){
    this.router.navigate(['api/getAllTeachers']);
  }
}
