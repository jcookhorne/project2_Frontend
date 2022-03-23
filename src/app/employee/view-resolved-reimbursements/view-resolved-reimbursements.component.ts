import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-view-resolved-reimbursements',
  templateUrl: './view-resolved-reimbursements.component.html',
  styleUrls: ['./view-resolved-reimbursements.component.css']
})
export class ViewResolvedReimbursementsComponent implements OnInit {
  reim: Reimbursement={
    reimbursementId: 0,
	  employeeId: 0,
    reimbursementAmount: 0,
  	reimbursementReason:"",
  	reimbursementDate:"",
    state:"",
	  status:"",
    imgUrl: ""
   }

  constructor(private employeeService:EmployeeService) { }
  allReimbursements: Reimbursement[] = [];
  ngOnInit(): void {
  this.employeeService.resolvedReimbursements().subscribe((response)=>{
    this.allReimbursements = response;
  });
}
}
