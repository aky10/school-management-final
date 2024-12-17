import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})

export class CreateStudentComponent implements OnInit{
  
  name:any='';
  state:any=''
  birthDate:any=''
  city:any=''
  contactNo:any=''
  fatherName:any='';
  grade:any='';
  studentForm!: FormGroup;
  // data: { state: any; birthDate: any; contactNo: any; city: any; fatherName: any; name: any; grade: any; };
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      teachingGrade: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      state: [this.states[0], Validators.required], // Default state
      city: ['', Validators.required],
      dob: ['', Validators.required],
      fatherName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      contactNo: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    });
  }


  

  
  //state and city data
  states = [
    { name: 'M.P', cities: ['Indore', 'Bhopal', 'Dewas','Ujjain'] },
    { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
  ];
  
  temp:any=['Mumbai', 'Pune', 'Nagpur']

  minDate!: Date;
  maxDate!:Date;

  
  selectedState!: any;
  selectedCity!: any;
  selectedDate!: any;
  e: any;

  dob(event:any){
    console.log(event);
    
  }


  // getCities(): string[] {
  //   const selectedState = this.studentForm.get('state')?.value;
  //   return selectedState ? selectedState.cities : [];
  // }
  
  

  //-------------------------
  student:Student=new Student(); 

  // date 
  date!:Date;
  constructor(private studentService:StudentService,private router:Router,private fb: FormBuilder){
    //age validation

  const currYear=new Date().getFullYear();
  console.log(currYear);
  
  this.minDate=new Date(currYear- 20,0,1);
  this.maxDate=new Date(currYear+1- 0,0,0);
  };

  isNameValid(string: any): boolean {
    return /^[a-zA-Z\s]*$/.test(string);
  }
  isPhoneValid(string: any): boolean {
    return /^(0|91)?[6-9][0-9]{9}$/.test(string);
  }

  getCities() {
    const state = this.studentForm.get('state')?.value;
    return state?.cities || [];
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log('Form Submitted', this.studentForm.value);
       this.student.state=this.state.name
        this.student.birthDate=this.birthDate
        this.student.contactNo=this.contactNo
        this.student.city=this.city
        this.student.fatherName=this.fatherName
        this.student.name=this.name
        this.student.grade=this.grade
      // }
    } else {
      console.log('Form is invalid');
    }
    this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(data);
      this.gotoStudentsList();
      // if(!this.student.name || !this.student.birthDate || !this.student.city || !this.student.
      //   fatherName || !this.student.contactNo || !this.student.grade || !this.student.state){
      //     console.log("good");
          
      //     alert("fill all fields");
      //     return false;
      //   }
      
    })
  };
  gotoStudentsList(){
    this.router.navigate(['api/getAllStudents']);
  }
}
  


