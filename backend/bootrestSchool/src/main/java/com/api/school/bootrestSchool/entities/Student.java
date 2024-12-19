package com.api.school.bootrestSchool.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // tells hibernate to make a table of this class
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) //for automatic generation of id
    @Column(name = "Student_id ")
    private int id;
    private String name;
    private int grade;
    private String state;
    private String city;
    private String contactNo;
    private Date birthDate;
    private String fatherName;

    public Student(int id, String name, int grade, String state, String city, String contactNo, Date birthDate,
            String fatherName) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.state = state;
        this.city = city;
        this.contactNo = contactNo;
        this.birthDate = birthDate;
        this.fatherName = fatherName;
    }
    public void setState(String state) {
        this.state = state;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public String getCity() {
        return city;
    }
    
    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + ", grade=" + grade + "]";
    }
    public String getFatherName() {
        return fatherName;
    }
    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getGrade() {
        return grade;
    }
    public void setGrade(int grade) {
        this.grade = grade;
    }
    public void setContactNo(String contactNo){
        this.contactNo=contactNo;
    }
    public String getContactNo(){
        return this.contactNo;
    }
    public void setBirthDate(Date birthDate){
        this.birthDate=birthDate;
    }
    public Date getBirthDate(){
        return this.birthDate;
    }
    public Student() {
    }
        
}
