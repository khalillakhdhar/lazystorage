import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  users=[];
  constructor(private router:Router)
  {
    localStorage.setItem("users",JSON.stringify(this.users));
  
  }
  connexion()
  {
  
    this.router.navigate(['./dashboard']);
   // window.location.replace("./dashboard");
  }
}
