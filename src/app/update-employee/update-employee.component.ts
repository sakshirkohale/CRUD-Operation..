import { Component } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id:number=0;
  employee:Employee=new Employee();
  constructor(private employeeservice:EmpserviceService,private route:ActivatedRoute,private rout:Router){}


 
  ngOnInit():void
  {
   this.id=this.route.snapshot.params['id'];
   this.employeeservice.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data

   })
  }

  onSubmit(){
    this.employeeservice.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.employee=data;
      this.goToEmployeeList()
    })

  }

  goToEmployeeList()
  {
    this.rout.navigate(['/employees']);
  }
}
