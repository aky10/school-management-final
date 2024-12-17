import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent  } from './update-teacher/update-teacher.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {
        path:"api/getAllStudents",
        component:AllStudentsComponent,
    },
    {
        path:"", redirectTo:'api',pathMatch:'full',
    },
    {
        path:"api",
        component:HomePageComponent,
    },
    {
        path:"api/createStudent", component:CreateStudentComponent,
    },
    {
        path:"api/updateStudent/:id",component:UpdateStudentComponent,
    },
   
    // {
    //     path:"api/updateStudent/:id",component:UpdateStudentComponent,
    // },
// --------------------------------------------------------------
    {
        path:"api/getAllTeachers",
        component:AllTeachersComponent,
    },
    {
        path:"", redirectTo:'api',pathMatch:'full',
    },
    {
        path:"api/createTeacher", component:CreateTeacherComponent,
    },
    {
        path:"api/updateTeacher/:id",component:UpdateTeacherComponent,
    },
    // {
    //     path:"api/getAllTeachers",
    //     component:AllTeachersComponent,
    // },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }