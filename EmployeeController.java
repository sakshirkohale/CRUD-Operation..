package Fullstackproject.Employee.Management.System.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Fullstackproject.Employee.Management.System.entity.Employee;
import Fullstackproject.Employee.Management.System.exception.ResourceNotFoundException;
import Fullstackproject.Employee.Management.System.repository.EmployeeRepository;

@RestController //this annotation tells to the spring container that is this class is request handler class
@CrossOrigin("http://localhost:4200/")
public class EmployeeController {

	@Autowired   //It is used to access all the methods of interfaces
	
	private EmployeeRepository employeerepository;
	
	//get all employee
	@GetMapping("/employees")
	public List<Employee>getAllEmployee()
	{
		return employeerepository.findAll(); //find all is used to access all the employees from database
	}

	
	//create new employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeerepository.save(employee);
	}
	
	//get data by id
	@GetMapping("/employees/{id}")
	public ResponseEntity <Employee> getEmployeeById(@PathVariable int id)
	{ 
		Employee employee= employeerepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with Id: "+id));
		return ResponseEntity.ok(employee);
		}
	
	//Update data by Id
	@PutMapping("/employees/{id}")
	public ResponseEntity <Employee>updateEmployee(@PathVariable int id,@RequestBody Employee employeedetails)//requestbody is used o bind the http request body with method parameter in controller 
	{

		Employee employee= employeerepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with Id: "+id));
		
		
		employee.setName(employeedetails.getName());
		employee.setDesignation(employeedetails.getDesignation());
		employee.setSalary(employeedetails.getSalary());
		employeerepository.save(employee); 
		
		return ResponseEntity.ok(employee);
		
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>>deleteEmployee(@PathVariable int id)
	{
		Employee employee= employeerepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with Id"+id));

		employeerepository.delete(employee);
		Map<String,Boolean>response=new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
}
