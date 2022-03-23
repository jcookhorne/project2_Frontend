import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-request-reimbursement',
  templateUrl: './request-reimbursement.component.html',
  styleUrls: ['./request-reimbursement.component.css']
})
export class RequestReimbursementComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, private http:HttpClient ){ }

  selectedFile = null;
onFileSelected(event: { target: { files: null[]; }; }){
  this.selectedFile = event.target.files[0];
}
onUpload(){

}




  retrieveEmployeeId(): any {
    let id = localStorage.getItem("id");

    return id;
  }
  reim: Reimbursement = {
    reimbursementId: 0,
    employeeId: this.retrieveEmployeeId(),
    reimbursementAmount: 0,
    reimbursementReason: "",
    reimbursementDate: "",
    state:"",
    status: "",
    imgUrl:""
  }

  ngOnInit(): void {


  }

  reimbursement() {
    this.employeeService.requestReimbursment(this.reim).subscribe((response) => {
      this.router.navigate(['home']);
    })
  }


}
