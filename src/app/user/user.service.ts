import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/employee.model';
import { Manager } from '../manager/manager.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private authService: AuthService, private http:HttpClient) { }
  newUser: User ={
    username: "",
    password: "",
    role: ""
  }


  validateManager(user: Manager) {
    console.log("user data:");
    console.log(user);
    return this.http.post<Manager>("http://localhost:4444/api/manager-login", user);

  }
  validateEmployee(user: Employee) {
    console.log("user data:");
    console.log(user);
    return this.http.post<Employee>("http://localhost:4444/api/employee-login", user);

  }



}

