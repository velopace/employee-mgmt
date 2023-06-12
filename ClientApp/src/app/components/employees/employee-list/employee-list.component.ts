import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    }, error => console.log(error));
  }

}
