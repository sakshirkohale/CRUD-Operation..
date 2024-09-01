import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  baseUrl="http://localhost:8080/employees";

  constructor(private httpClient:HttpClient) { }

  getemployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);// get is method of httpclient
  }

  createemployee( employee:Employee):Observable<object>
  {
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }

 getEmployeeById(id:number):Observable<Employee>
  {
     return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);

  }
  updateEmployee(id:number,employee:Employee):Observable<Employee>
  {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`,employee)
  }

  deleteEmployeeById(id:number):Observable<Employee>
  {
     return this.httpClient.delete<Employee>(`${this.baseUrl}/${id}`);

  }

  searchEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
}
