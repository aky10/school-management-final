import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './Teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private getURL = 'http://localhost:8080/api/getAllTeachers';
  private createURL = 'http://localhost:8080/api/createTeacher';
  private getTeacherByIDURL='http://localhost:8080/api/getTeacherById/'
  private updateTeacherURL="http://localhost:8080/api/updateTeacherById/"
  private deleteTeacherURL="http://localhost:8080/api/deleteTeacherById/";

  constructor(private httpClient: HttpClient) {}

  getTechersList(): Observable<Teacher[]> {//this indicates that the method returns an 
  // Observable of type Object. In Angular, an Observable is used to handle asynchronous 
  // operations, and it allows you to subscribe to the result of an asynchronous operation when 
  // it completes.
    return this.httpClient.get<Teacher[]>(`${this.getURL}`);
  }
  createTeacher(teacher:Teacher): Observable<Object>{
    return this.httpClient.post<Object>(`${this.createURL}`,teacher)//sends an HTTP POST     
    //request to the server using Angular's HttpClient service (this.httpClient).
  }
  getTeacherById(id:number):Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.getTeacherByIDURL.concat(String(id))}` );
  }
  updateTeacher(id:number,teacher:Teacher):Observable<any>{
    
    return this.httpClient.put(`${this.updateTeacherURL.concat(String(id))}`,teacher);
  }
  deleteTeacher(id:number):Observable<void>{
    console.log("came uin stu service "+id);
    console.log(this.deleteTeacherURL.concat(String(id)))
    
    return this.httpClient.delete<void>(`${this.deleteTeacherURL.concat(String(id))}`);
    
  }
}