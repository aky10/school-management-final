import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { ActivatedRoute,  } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  name:any='';
  state:any=''
  birthDate:any=''
  city:any=''
  contactNo:any=''
  fatherName:any='';
  grade:any='';

  id!: number;
  student:Student=new Student();
  stateSelected: any;
  cities: string[] | undefined;
  stateChanged:any;

  constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router,
    private fb: FormBuilder){

    //age validation
    const currYear=new Date().getFullYear();
  console.log(currYear);
  
  this.minDate=new Date(currYear- 20,0,1);
  this.maxDate=new Date(currYear+1- 0,0,0);
  }
  studentForm!: FormGroup;
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
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data=>{
      // this.student=data;
        this.birthDate=data.birthDate
        this.contactNo=data.contactNo
        this.city=data.city
        // this.state=data.state
        this.fatherName=data.fatherName
        this.name=data.name
        this.grade=data.grade
      this.birthDate=new Date(data.birthDate).toISOString().split('T')[0];

      // this.stateSelected=data.state;
      
      this.states.forEach(state=> {
        if(state.name===data.state){

          this.state= state;
        }
      }
      )
      
    },error=> console.log(error));
    
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

  onStateChange(): void {
    console.log('Selected State:', this.stateSelected);
    console.log('Selected State ID:', this.stateSelected?.id);
    console.log('Selected State Name:', this.stateSelected?.name);
  }

  getCities() {
    const state = this.studentForm.get('state')?.value;
    return state?.cities || [];
  }

  
  // getCities() {
  //   // const stateSelected = this.studentForm.get('state')?.value;
  //   let cities
  //   this.states.forEach(state=> {
  //     if(state.name===this.stateSelected){

  //        cities= state.cities
  //     }
  //   }
  //   )
  //   return cities || [];
  // }
  

  //-------------------------
  // date 
  date!:Date;
  // saveStudent(){

  //   this.student.state=this.selectedState.name;
  //   this.student.city=this.selectedCity;
  //   // this.student.birthDate;
  //   this.student.birthDate=this.selectedDate;
  //   console.log(this.selectedDate);
    
  //   console.log(this.student);
  //   this.studentService.createStudent(this.student).subscribe(data=>{
  //     console.log(data);
  //     this.gotoStudentsList();
      
  //   })
  // };

  

  onSubmit(){
    if (this.studentForm.valid) {
      console.log('Form Submitted', this.studentForm.value);
      // this.student=this.studentForm.value;
      this.student.state=this.studentForm.value.state.name;
      this.student.birthDate=this.studentForm.value.dob;
      this.student.city=this.studentForm.value.city;
      this.student.contactNo=this.studentForm.value.contactNo;
      this.student.fatherName=this.studentForm.value.fatherName;
      this.student.name=this.studentForm.value.fullName;
      this.student.grade=this.studentForm.value.teachingGrade;
    } else {
      console.log('Form is invalid');
    }
    this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(data);
      this.gotoStudentsList();
    });
  }
  gotoStudentsList(){
    this.router.navigate(['api/getAllStudents']);
  }
}

