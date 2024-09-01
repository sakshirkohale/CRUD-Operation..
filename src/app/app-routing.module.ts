import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

const routes: Routes = [

  {path:'employees',component:ListEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'addemployee',component:CreateemployeeComponent},
  {path:'updateemployee/:id',component:UpdateEmployeeComponent},
  {path:'empdetails/:id',component:EmpdetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
