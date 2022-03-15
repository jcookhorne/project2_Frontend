import { Component, OnInit } from '@angular/core';
import { Resolved } from '../resolved.model';
import { ManagerService } from '../manager.service';



@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent implements OnInit {

  resolve: Resolved = {
    reimbursementId: 0,
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



  fetchAllResolved() {
    this.managerService.fetchAllResolved(this.resolve).subscribe((response: any) => {

      this.oneRequest = response;
    });
  }

  ngOnInit(): void {
    this.fetchAllResolved();
  }

}
