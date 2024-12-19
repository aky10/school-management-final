package com.api.school.bootrestSchool.services;
import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.school.bootrestSchool.entities.Teacher;
import com.api.school.bootrestSchool.repository.TeacherRepository;
import com.api.school.bootrestSchool.servicesREST.TeacherServices;

import ch.qos.logback.classic.Logger;
@Service
public class TeacherServicesImpl implements TeacherServices{
    
   
    @Autowired
    private TeacherRepository teacherRepository;

    Logger logger=(Logger) LoggerFactory.getLogger(StudentServicesImpl.class);

    
    //get all school

    public List<Teacher> getAllTeachers() {
        
        List<Teacher> list=teacherRepository.findAll();
        return list;
    }

    //get all teachers by their teaching grade

    public List<Teacher> getTeachersByGrade(int teaching_id){
        List<Teacher> list=teacherRepository.findByTeachingId( teaching_id);
        return list;
    }

    //get school by id

    public Teacher getTeacherById(int id){

        Teacher teacher=null;
        try {
            teacher=teacherRepository.findById(id);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return teacher;
    }

    //post new school
    public Teacher postTeacher(Teacher teacher){

        System.out.println(teacher);
        Teacher t=teacherRepository.save(teacher);
        System.out.println(t);
        return t;
    }

    //delete a teacher
    public void deleteTeacher(int id){

        teacherRepository.deleteById(id); 
    }

    //post a teacher
    
    public void updateTeacher(Teacher school,int id){

        System.out.println(school);
        school.setId(id);
        teacherRepository.save(school);
        System.out.println(school);
    }
}
