import { Component, OnInit } from '@angular/core';
import { Denied } from '../denied.model';
import { ManagerService } from '../manager.service';
@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.css']
})
export class DeniedComponent implements OnInit {


  nope: Denied = {
    deniedId: 0,
    employeeId: 0,
    reimbursementAmount: 0,
    reimbursementReason: "",
    status: "",
    reimbursementDate: ""
  };

  oneRequest: any = [];
  allPending: any[] = [];

  constructor(private managerService: ManagerService) {
    this.managerService = managerService;
  }



  fetchAllDenied() {
    this.managerService.fetchAllDenied(this.nope).subscribe((response: any) => {

      this.oneRequest = response;
    });
  }

  ngOnInit(): void {
    this.fetchAllDenied();
  }

}
