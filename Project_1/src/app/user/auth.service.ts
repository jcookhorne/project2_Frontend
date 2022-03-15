import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { Manager } from '../manager/manager.modue';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//purpose of this service is to store and get user infor form the browser
  constructor() { }
loggedIn: boolean = false;
employeeRole: boolean = false;
managerRole: boolean = false;
  storeEmployeeUser(employee: Employee ): void {
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee))  
  }
  retrieveEmployeeUser(): Employee{
   let data: any= sessionStorage.getItem("employeeInfo");
    return JSON.parse(data);
    
  }
  destroyEmployeeUser(): void{
    sessionStorage.removeItem("managerInfo");
  }  

  storeManagerUser(manager: Manager): void {
    sessionStorage.setItem("managerInfo", JSON.stringify(manager))
   
  }
  retrieveManagerUser(): Manager{
   let data: any= sessionStorage.getItem("managerInfo");
    return JSON.parse(data);
    
  }
 

  destroyManagerUser(): void{
    sessionStorage.removeItem("managerInfo");
  }  
  
  }

