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

}
