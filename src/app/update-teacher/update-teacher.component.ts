import { Component, OnInit } from '@angular/core';

import { Teacher } from '../Teacher';
import { TeacherService } from '../teacher.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit{

  teacherForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    teachingGrade: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  id!: number;
  teacher:Teacher=new Teacher();

  constructor(private TeacherService:TeacherService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.TeacherService.getTeacherById(this.id).subscribe(
      (data) => {
        this.teacher = data;
        this.teacherForm.patchValue({
          fullName: this.teacher.name,
          city: this.teacher.address,
          teachingGrade: this.teacher.teachingGrade,
          gender: this.teacher.gender,
        });
      },
      (error) => console.log(error)
    );
  }
  

  onTeacherNameChange(){

    if(!this.isNameValid(this.teacher.name)){
      const hint=document.querySelector('#tName');
      hint?.classList.remove("hide");
    }
    else{
      const hint=document.querySelector("#tName");
      hint?.classList.add("hide");
    }
  }
  //validation for teacher name
  isNameValid(string: any): boolean {
    return /^[a-zA-Z\s]*$/.test(string);
  }
  onTeachingGradeChange(){
      
    if(Number(this.teacher.teachingGrade)<=12 && Number(this.teacher.teachingGrade)>=1){
      let hint = document.querySelector("#grade");
      hint?.classList.add("hide");
    }
    else{
      let hint = document.querySelector("#grade");
      hint?.classList.remove("hide");
    }
  }
  onSubmit(){
    this.TeacherService.updateTeacher(this.id,this.teacher).subscribe(data=>{
      console.log("wdwdqwdwqd");
      
      this.gotoTeachersList();
    },error=> console.log(error));
  }
  gotoTeachersList(){
    this.router.navigate(['api/getAllTeachers']);
  }
}

