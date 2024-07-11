import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  constructor(private departmentService: DepartmentService) {}

  createDepartment(department: Department) {
    this.departmentService.createDepartment(department).subscribe(response => {
      console.log('Department created:', response);
    });
  }

  // Outros métodos CRUD aqui
}