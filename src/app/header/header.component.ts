import { Component, OnInit } from '@angular/core';

import {AuthService} from '../user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
toggle =true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean{
    return this.authService.loggedIn;
  }

  getRole(): string{
    if(this.authService.employeeRole){
      return "emp";
    }else if(this.authService.managerRole){
      return "manager";
    }
    return ""
  }

  isCollapsed(){
      if (this.toggle){;
        this.toggle = false;
    
      }else{
        this.toggle =true;
      }
  }

 
}
