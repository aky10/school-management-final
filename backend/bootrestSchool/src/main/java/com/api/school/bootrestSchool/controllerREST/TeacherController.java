package com.api.school.bootrestSchool.controllerREST;

import com.api.school.bootrestSchool.entities.Teacher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface TeacherController {

    // @GetMapping("/api/getAllTeachers")
    ResponseEntity<List<Teacher>> getSchools();

    ResponseEntity<List<Teacher>> getTeachersByGrade(int teaching_id);

    // @GetMapping("/api/getTeacherById/{id}")
    ResponseEntity<Teacher> getSchool(@PathVariable("id") int id);

    // @PostMapping("/api/createTeacher")
    ResponseEntity<Teacher> postTeacher(@RequestBody Teacher teacher);

    // @DeleteMapping("/api/deleteTeacherById/{id}")
    ResponseEntity<Void> deleteSchool(@PathVariable("id") int id);

    // @PatchMapping("/api/updateTeacherById/{id}")
    ResponseEntity<Teacher> updateTeacher(@PathVariable("id") int id, @RequestBody Teacher teacher);
}
