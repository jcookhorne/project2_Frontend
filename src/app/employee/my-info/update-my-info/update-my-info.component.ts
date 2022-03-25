
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-update-my-info',
  templateUrl: './update-my-info.component.html',
  styleUrls: ['./update-my-info.component.css']
})
export class UpdateMyInfoComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private router:Router) { }
  newEmployee: Employee = {
    employeeId : 0,
    employeeFirstName : "",
    employeeLastName : "",
    employeeEmail : "",
    employeeAddress : "",
    employeeContact : "",
    employeeUsername : "",
    employeePassword : ""
  }
  updateInfo(){
    this.employeeService.updateInfo(this.newEmployee).subscribe((response)=>{
      console.log(response);

      this.router.navigate(['e-info']);

    });
  }
  ngOnInit(): void {
    this.employeeService.employeeInfo().subscribe((response)=>{
      this.newEmployee.employeeId = response.employeeId;
      this.newEmployee.employeeFirstName = response.employeeFirstName;
      this.newEmployee.employeeLastName = response.employeeLastName;
      this.newEmployee.employeeEmail = response.employeeEmail;
      this.newEmployee.employeeAddress = response.employeeAddress;
      this.newEmployee.employeeContact = response.employeeContact;
      this.newEmployee.employeeUsername = response.employeeUsername;
      this.newEmployee.employeePassword = response.employeePassword;
    })
  }

}
