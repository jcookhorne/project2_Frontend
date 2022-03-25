import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeId: Number | undefined;
  constructor(private http: HttpClient) { }

  retrieveEmployeeId(): any {
    let id = sessionStorage.getItem("id");

    return id;
  }

  employeeInfo(employeeId: number = (this.retrieveEmployeeId())) {
    console.log(employeeId);
    return this.http.get<Employee>("http://localhost:4444/api/employee-info/" + employeeId);
  }
  resolvedReimbursements(employeeId: number = (this.retrieveEmployeeId())): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>("http://localhost:4444/api/employee-resolved/" + employeeId);
  }

  pendingReimbursements(employeeId: number = (this.retrieveEmployeeId())): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>("http://localhost:4444/api/employee-pending/" + employeeId);
  }

  updateInfo(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>("http://localhost:4444/api/employee-update", employee);
  }

  requestReimbursment(reimbursement: Reimbursement): Observable<Reimbursement> {
    console.log("Before Http request");
    console.log(reimbursement);
    return this.http.post<Reimbursement>("http://localhost:4444/api/employee-request", reimbursement);
  }
 
}
