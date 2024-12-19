package com.api.school.bootrestSchool.services;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.school.bootrestSchool.entities.Student;
import com.api.school.bootrestSchool.repository.StudentRepository;
import com.api.school.bootrestSchool.servicesREST.StudentServices;

import ch.qos.logback.classic.Logger;

@Service
public class StudentServicesImpl implements StudentServices{
    
    @Autowired
    private StudentRepository studentRepository;

    Logger logger=(Logger) LoggerFactory.getLogger(StudentServicesImpl.class);
    

    //get all student

    public List<Student> getAllStudents() {
        logger.info("got all students");
        List<Student> list=studentRepository.findAll();// inbuild method in jpa
        return list;
    }

    //get students with teacher id

    public List<Student> getAllStudentsByTeacherGrade(int tgrade){

        logger.info("got studetns by teacher id");
        List<Student> ls= studentRepository.getAllStudentsByTeacherGrade(tgrade);
        return ls;
    }

    //get student by id

    public Student getStudentById(int id){

        Student student=null;
        try {
            logger.info("got a student with "+id);
            student=studentRepository.findById(id);
            
        } catch (Exception e) {
            e.getMessage();
        }
        return student;
    }

    //post new student
    public Student postStudent(Student student){

        logger.info("posted all students");
        if(student.getGrade()>=1 && student.getGrade()<=12 ){
            Student sc=studentRepository.save(student);
            return sc;
        }
        return null;
    }

    //delete a student
    public void deleteStudent(int id){

        logger.info("deleted a student with "+id);

        studentRepository.deleteById(id); // incase the id is null it throws null than
        //this method also returns null
    }

    //put a school
    
    public void updateStudent(Student student,int id){

        logger.info("updated a student with "+id);
        student.setId(id);
        studentRepository.save(student);
    }
}
