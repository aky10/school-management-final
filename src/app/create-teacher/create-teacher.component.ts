import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../Teacher';
import { TeacherService } from '../teacher.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})      
export class CreateTeacherComponent {

  teacherForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    teachingGrade: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])
  });

  genders=["Male","Female"];
  selectedGender!:any;
  selectedGrade!:any;

  teacher:Teacher=new Teacher(); 


  constructor(private teacherService:TeacherService,private router:Router){
  };

  saveTeacher(){
    
    console.log(this.teacher);
    this.teacherService.createTeacher(this.teacher).subscribe(data=>{
      console.log(data);
      
      this.gotoTeachersList();
      
    })
  };
  gotoTeachersList(){
    this.router.navigate(['api/getAllTeachers']);
  }

  isLetter(character: any): boolean {
    return /[a-zA-Z]/.test(character);
  }

  //validation for teacher name
  isNameValid(string: any): boolean {
    return /^[a-zA-Z\s]*$/.test(string);
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
    this.teacher.gender=this.selectedGender;

    console.log(this.teacher);
    
    // if(!this.teacher.address || !this.teacher.gender || !this.teacher.id || !this.teacher.name
    //   || !this.teacher.teachingGrade){
    //     alert("all fields should be filled");
    //     return false;
    //   }
    console.log("hlo");
    
    this.saveTeacher();
    return true;
  }
}