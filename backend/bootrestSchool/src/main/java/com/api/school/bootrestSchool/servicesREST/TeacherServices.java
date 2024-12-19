package com.api.school.bootrestSchool.servicesREST;

import com.api.school.bootrestSchool.entities.Teacher;

import java.util.List;

public interface TeacherServices {
    
    List<Teacher> getAllTeachers();
    
    Teacher getTeacherById(int id);
    
    Teacher postTeacher(Teacher teacher);
    
    void deleteTeacher(int id);
    
    void updateTeacher(Teacher teacher, int id);

    List<Teacher> getTeachersByGrade(int teaching_id);
}
