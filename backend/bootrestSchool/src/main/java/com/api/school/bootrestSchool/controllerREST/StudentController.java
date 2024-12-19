package com.api.school.bootrestSchool.controllerREST;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.api.school.bootrestSchool.entities.Student;

public interface StudentController {

    // @GetMapping("/api/getAllStudents")
    ResponseEntity<List<Student>> getStudents();

    // @GetMapping("/api/getAllStudentsByTeacherGrade/{t_id}")
    List<Student> getAllStudentsByTeacherGrade(@PathVariable("tGrade") int tid);

    // @GetMapping("/api/getStudentById/{id}")
    ResponseEntity<Student> getStudent(@PathVariable("id") int id);

    // @PostMapping("/api/createStudent")
    ResponseEntity<Student> postStudent(@RequestBody Student student);

    // @DeleteMapping("/api/deleteStudentById/{id}")
    ResponseEntity<Void> deleteStudent(@PathVariable("id") int id);

    // @PutMapping("api/updateStudent/{id}")
    ResponseEntity<Student> updateStudent(@PathVariable("id") int id, @RequestBody Student student);
    
}
