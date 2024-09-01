package Fullstackproject.Employee.Management.System;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication //. This class should have the main method to run the 
//Spring Boot application. @SpringBootApplication annotation includes AutoConfiguration, Component Scan, and Spring Boot Configuration

public class EmployeeManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementSystemApplication.class, args);
		System.out.println("Welcome in Employee Management system...!!");
	}
      
}
