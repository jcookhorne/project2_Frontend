
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model'
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  newEmployee: Employee = {
    employeeId: 0,
    employeeFirstName: "",
    employeeLastName: "",
    employeeEmail: "",
    employeeAddress: "",
    employeePhoneNumber: "",
    employeeUsername: "",
    employeePassword: ""
  }
  constructor(private router: Router, private employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.employeeService.employeeInfo().subscribe((response) => {
      this.newEmployee.employeeId = response.employeeId;
      this.newEmployee.employeeFirstName = response.employeeFirstName;
      this.newEmployee.employeeLastName = response.employeeLastName;
      this.newEmployee.employeeEmail = response.employeeEmail;
      this.newEmployee.employeeAddress = response.employeeAddress;
      this.newEmployee.employeePhoneNumber = response.employeePhoneNumber;
      this.newEmployee.employeeUsername = response.employeeUsername;
      this.newEmployee.employeePassword = response.employeePassword;
    })
  }

  updateInfo() {
    this.router.navigate(['update-info']);
  }
}




