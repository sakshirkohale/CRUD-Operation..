import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent {

  id: number=0;
  employee: Employee =new Employee();
  constructor(private route:ActivatedRoute,private employeeservice:EmpserviceService){}


  ngOnInit():void
  {
   this.id=this.route.snapshot.params['id'];
   this.employeeservice.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data

   })
  }

}
