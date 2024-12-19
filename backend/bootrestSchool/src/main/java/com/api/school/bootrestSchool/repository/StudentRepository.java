package com.api.school.bootrestSchool.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.api.school.bootrestSchool.entities.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
    public Student findById(int id);
    
    @Query(value = "select * from student where grade=:teaching_grade ",nativeQuery = true)
    public List<Student> getAllStudentsByTeacherGrade(@Param("teaching_grade")int teaching_grade);

}
