package com.api.school.bootrestSchool.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.api.school.bootrestSchool.controllerREST.TeacherController;
import com.api.school.bootrestSchool.entities.Teacher;
import com.api.school.bootrestSchool.servicesREST.TeacherServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController// mark a class as a Spring MVC controller, which is responsible for handling 
//web requests and returning responses
@CrossOrigin(origins = "*", allowedHeaders = "*")   
public class TeacherControllerImpl implements TeacherController{
    
    @Autowired // will create obj of this class teacherServices
    private TeacherServices teacherServices;

    @GetMapping("/api/getAllTeachers")//path
    public ResponseEntity<List<Teacher>> getSchools(){//using responseentity we can send 
        //status easily
        
        List<Teacher> list= this.teacherServices.getAllTeachers();

        if(list.size()<=0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }
    @GetMapping("/api/getTeachersByGrade/{teaching_id}")
    public ResponseEntity<List<Teacher>> getTeachersByGrade(@PathVariable("teaching_grade") 
    int teaching_grade) {
        
        List<Teacher> list=this.teacherServices.getTeachersByGrade(teaching_grade);

        if(list.size()<=0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
    
   @SuppressWarnings("null")
@GetMapping("/api/getTeacherById/{id}")
    public ResponseEntity<Teacher> getSchool(@PathVariable("id") int id) {
        
        Teacher sc= this.teacherServices.getTeacherById(id);

        if(sc==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(sc));
    }

    @SuppressWarnings("null")
    @PostMapping("/api/createTeacher")
    public ResponseEntity<Teacher> postTeacher(@RequestBody Teacher teacher) {

        Teacher sc=null;

        try {
            sc=this.teacherServices.postTeacher(teacher);
            return ResponseEntity.of(Optional.of(sc));
        } catch (Exception e) {
            
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @DeleteMapping("/api/deleteTeacherById/{id}")
    public ResponseEntity<Void> deleteSchool(@PathVariable("id") int id){

        try {
            this.teacherServices.deleteTeacher(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PatchMapping("/api/updateTeacherById/{id}")
    public ResponseEntity<Teacher> updateTeacher(@PathVariable ("id") int id, @RequestBody Teacher teacher) {
        //which to change,new changed
        
        try {
            this.teacherServices.updateTeacher(teacher,id);
            return ResponseEntity.ok().body(teacher);
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
