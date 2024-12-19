package com.api.school.bootrestSchool.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.api.school.bootrestSchool.entities.Teacher;


public interface TeacherRepository extends JpaRepository<Teacher,Integer>{
    public Teacher findById(int id);

    @Query(value="select * from teacher where teaching_grade=:id",nativeQuery = true)
    public List<Teacher> findByTeachingId(@Param("id") int id);
}
