package com.api.school.bootrestSchool.servicesREST;

import com.api.school.bootrestSchool.entities.Student;

import java.util.List;

public interface StudentServices {

    List<Student> getAllStudents();

    List<Student> getAllStudentsByTeacherGrade(int tgrade);

    Student getStudentById(int id);

    Student postStudent(Student student);

    void deleteStudent(int id);

    void updateStudent(Student student, int id);

}
