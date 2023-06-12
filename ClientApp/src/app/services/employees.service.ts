import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getAllEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + 'api/employees');
  }

  addEmployee(addEmployeeRequest: Employee) {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseUrl + 'api/employees', addEmployeeRequest);
  }

  getEmployee(id: string) {
    return this.http.get<Employee>(this.baseUrl + 'api/employees/' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee) {
    return this.http.put<Employee>(this.baseUrl + 'api/employees/' + id, updateEmployeeRequest);
  }
}
