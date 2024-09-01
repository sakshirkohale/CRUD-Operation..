import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmpserviceService } from '../empservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  employees:Employee[]=[]  //it access the data from employee class and store into employees

  constructor(private empservice:EmpserviceService, private router:Router){}
  ngOnInit():void{
    this.getemployees();

  }

  private getemployees(){
    this.empservice.getemployeeList().subscribe(data=>{
      this.employees=data
      console.log(data);
    });
  }

  updateEmployee(id:number){
    this.router.navigate(['updateemployee',id])
  }

  deleteEmployee(id:number){
    this.empservice.deleteEmployeeById(id).subscribe(data=>
    {
      console.log(data)
      this.getemployees();
    })

  }

  viewemployee(id:number) {

    this.router.navigate(['empdetails',id]);
  }
  searchQuery: string = '';
  searchById: number | null = null;

  onSearch() {
    if (this.searchById !== null && this.searchById > 0) {
      this.empservice.searchEmployeeById(this.searchById).subscribe(data => {
        this.employees = [data];  // Convert single object to array
      }, error => {
        console.log('Employee not found');
        this.employees = [];
      });
    } else {
      this.getemployees();
    }
  }
}
