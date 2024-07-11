import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(private employeeService: EmployeeService) {}

  createEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe(response => {
      console.log('Employee created:', response);
    });
  }

  // Outros métodos CRUD aqui
}