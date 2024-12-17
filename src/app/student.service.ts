import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Student'; 
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private getURL = 'http://localhost:8080/api/getAllStudents';
  private createURL = 'http://localhost:8080/api/createStudent';
  private getStudentByIDURL='http://localhost:8080/api/getStudentById/'
  private updateStudentURL="http://localhost:8080/api/updateStudent/"
  private deleteStudentURL="http://localhost:8080/api/deleteStudentById/";

  constructor(private httpClient: HttpClient) {}

  getStudentsList(): Observable<Student[]> {//observable object that represents a stream of 
    // data that can be observed over time. It is part of the RxJS (Reactive Extensions for js 
    // library,which is a powerful tool for handling asynchronous operations and managing 
    // streams of data
    return this.httpClient.get<Student[]>(`${this.getURL}`);
  }
  createStudent(student:Student): Observable<Object>{
    return this.httpClient.post<Object>(`${this.createURL}`,student)
  }
  getStudentById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.getStudentByIDURL.concat(String(id))}` );
  }
  updateStudent(id:number,student:Student):Observable<any>{
    return this.httpClient.put(`${this.updateStudentURL.concat(String(id))}`,student);
  }
  deleteStudent(id:number):Observable<void>{
    console.log("came uin stu service "+id);
    console.log(this.deleteStudentURL.concat(String(id)))
    
    return this.httpClient.delete<void>(`${this.deleteStudentURL.concat(String(id))}`);
    
  }
}