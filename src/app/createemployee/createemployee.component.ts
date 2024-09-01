import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmpserviceService } from '../empservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent {

  employee:Employee=new Employee();

  constructor(private employeeservice:EmpserviceService,private rout:Router){}

  onSubmit(){
    this.insertemployee()
    console.log(this.employee);

  }
  insertemployee(){
    this.employeeservice.createemployee(this.employee).subscribe(data=>{
      this.goToEmployeeList()
      console.log(data)
    })
  }

  goToEmployeeList()
  {
    this.rout.navigate(['/employees']);
  }
}
