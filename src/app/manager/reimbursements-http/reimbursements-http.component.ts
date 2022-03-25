import { Component, OnInit } from '@angular/core';
import { Requests } from '../requests.model';
import { ManagerService } from '../manager.service';
import { Denied } from '../denied.model';



@Component({
  selector: 'app-reimbursements-http',
  templateUrl: './reimbursements-http.component.html',
  styleUrls: ['./reimbursements-http.component.css']
})
export class ReimbursementsHttpComponent implements OnInit {

  request: Requests = {
    reimbursementId: 0,
    employeeId: 0,
    reimbursementAmount: 0,
    reimbursementReason: "",
    status: "",
    reimbursementDate: "",
  };


  oneRequest: any = [];
  allPending: any[] = [];

  constructor(private managerService: ManagerService) {
    this.managerService = managerService;
  }



  fetchAllPending() {
    this.managerService.fetchAllPending(this.request).subscribe((response: any) => {

      this.oneRequest = response;
    });
  }

  approve(reimbursementId: any) {
    this.managerService.approve(reimbursementId).subscribe((response: any) => {

      this.oneRequest = response;
      this.fetchAllPending();
    });
  }
  deny(reimbursementId: any) {
    this.managerService.deny(reimbursementId).subscribe((response: any) => {

      this.oneRequest = response;
      this.fetchAllPending();
    });
  }

  ngOnInit(): void {
    this.fetchAllPending();

  }

}