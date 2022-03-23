import { Injectable } from '@angular/core';
import { Requests } from './requests.model';
import { Resolved } from './resolved.model';
import { Denied } from './denied.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Manager } from './manager.modue';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {



  constructor(private http: HttpClient, private userService: UserService) { }


  storeManagerUser(manager: Requests): void {
    sessionStorage.setItem("reimbursementInfo", JSON.stringify(manager))

  }

  retrieveReimbursementId() {
    let Id: number = JSON.parse(sessionStorage.getItem('reimbursementId') || '{}');
    console.log("retrieve employee log");
    console.log(Id);
    return Id;
  }

  storePending(manager: Requests): void {
    sessionStorage.setItem("reimbursementInfo", JSON.stringify(manager))

  }
  retrievePendingId() {
    let Id: number = JSON.parse(sessionStorage.getItem('pendingId') || '{}');
    console.log("retrieve pending");
    console.log(Id);
    return Id;
  }




  approve(pendingId: number=(this.retrieveReimbursementId())) {
    return this.http.put<Requests>("http://localhost:7070/api/approve/" + pendingId, {});
  }

  deny(pendingId: number = (this.retrieveReimbursementId())) {
    console.log(pendingId);
    return this.http.put<Requests>("http://localhost:7070/api/deny/" + pendingId, {});
  }

  fetchAllResolved(request: Resolved): Observable<Resolved[]> {
    return this.http.get<Resolved[]>("http://localhost:7070/api/employees/resolved");
  }

  fetchAllPending(request: Requests): Observable<Requests[]> {
    return this.http.get<Requests[]>("http://localhost:7070/api/employees");
  }

  fetchAllDenied(request: Requests): Observable<Requests[]> {
    return this.http.get<Requests[]>("http://localhost:7070/api/employees/denied");
  }

  fetchEmpReimbursement(search: String): Observable<Requests[]> {
    return this.http.get<Requests[]>("http://localhost:7070/api/employee/" + search);
  }
}