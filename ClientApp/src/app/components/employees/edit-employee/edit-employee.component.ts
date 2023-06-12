import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.employeesService.getEmployee(id).subscribe(employee => {
          this.employeeDetails = employee;
        })
      }
    })
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe(employee => {
      this.router.navigate(['employees']);
    });
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id).subscribe(res => {
      this.router.navigate(['employees']);
    })
  }
}
