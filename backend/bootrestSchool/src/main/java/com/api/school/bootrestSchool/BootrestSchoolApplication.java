package com.api.school.bootrestSchool;

import org.springframework.boot.SpringApplication;//includes @SpringBootConfiguration, 
//@EnableAutoConfiguration, and @ComponentScan 
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BootrestSchoolApplication {

	public static void main(String[] args) {					
		SpringApplication.run(BootrestSchoolApplication.class, args);
	}
}
