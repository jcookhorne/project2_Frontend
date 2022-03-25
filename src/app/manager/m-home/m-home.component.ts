import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Requests } from '../requests.model';
@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrls: ['./m-home.component.css']
})
export class MHomeComponent implements OnInit {

  search: string = "";

  request: Requests = {
    reimbursementId: 0,
    employeeId: 0,
    reimbursementAmount: 0,
    reimbursementReason: "",
    status: "",
<<<<<<< Updated upstream
    reimbursementDate: ""
=======
    reimbursementDate: "",
>>>>>>> Stashed changes
  };


  oneRequest: any = [];
  allPending: any[] = [];

  constructor(private managerService: ManagerService) {
    this.managerService = managerService;
  }



  fetchEmpReimbursement() {
    this.managerService.fetchEmpReimbursement(this.search).subscribe((response: any) => {

      this.oneRequest = response;
    });
  }


  ngOnInit(): void {
  }

}
