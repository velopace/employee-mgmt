import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private employeesService: EmployeesService, private router: Router) {}

  addEmployee() {
    this.employeesService.addEmployee(this.addEmployeeRequest).subscribe(employee => {
      this.router.navigate(['employees']);
    }, error => console.log(error));
  }
}
