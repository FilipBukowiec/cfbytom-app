import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: any = {
    "EmailId": "",
    "Password": ""
  }



  http = inject(HttpClient);

  constructor(private router:Router){

  }

  onLogin() {
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert("login succes");
        this.router.navigateByUrl("admin")
      } else {
        alert("check email or password");
      }
    })
  }
}
