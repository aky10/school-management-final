package com.api.school.bootrestSchool.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.school.bootrestSchool.controllerREST.StudentController;
import com.api.school.bootrestSchool.entities.Student;
// import com.api.school.bootrestSchool.services.StudentServicesImpl;
import com.api.school.bootrestSchool.servicesREST.StudentServices;

@RestController//rest body(in required form)+handle rest apis
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StudentControllerImpl implements StudentController{
    @Autowired // will create obj of this class and we can use methods of this class here 
    private StudentServices studentServices;

    @GetMapping("/api/getAllStudents")//path
    public ResponseEntity<List<Student>> getStudents(){//using responseentity we can send 
        //status
        
        List<Student> list= this.studentServices.getAllStudents();

        if(list.size()<=0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();//.build since .body
            //is not there
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }
    @GetMapping("/api/getAllStudentsByTeacherGrade/{tgrade}")
    public List<Student> getAllStudentsByTeacherGrade(@PathVariable("tgrade") int tgrade) {
        return this.studentServices.getAllStudentsByTeacherGrade(tgrade);
    }
    
    
@GetMapping("/api/getStudentById/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable("id") int id) {
        
        Student sc= this.studentServices.getStudentById(id);

        if(sc==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(sc);
    }

    @PostMapping("/api/createStudent")
    public ResponseEntity<Student> postStudent(@RequestBody Student student) {

        Student sc=null;

        try {
            System.out.println("posted");
            System.out.println(student);
            sc=this.studentServices.postStudent(student);
            return ResponseEntity.status(HttpStatus.CREATED).body(sc);
        } catch (Exception e) {
            
            e.printStackTrace();
             return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
    @DeleteMapping("/api/deleteStudentById/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable("id") int id){

        try {
            this.studentServices.deleteStudent(id);
            return ResponseEntity.status(HttpStatus.OK).build();
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("api/updateStudent/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable ("id") int id, @RequestBody Student student) {
        //which to change,new changed
        
        try {
            this.studentServices.updateStudent(student,id);
            return ResponseEntity.status(HttpStatus.CREATED).body(student);
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
