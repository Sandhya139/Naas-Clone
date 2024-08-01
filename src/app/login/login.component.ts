declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '2397970646-k2enolkqpqj6uk8obmjp5n3jblfmd477.apps.googleusercontent.com',
      callback: (response: any) => {
        this.handleLogin(response);
      }
    });
    google.accounts.id.renderButton(document.getElementById('google-button'), {
      theme: "filled_blue",
      width: "400px",
    });
  }
  private decodeToken(token : string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if(response){
      const payload = this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      if(sessionStorage.getItem("orgDetails")) {
      this.router.navigate(['header']);
      }
      else {
        this.router.navigate(['createOrg']);
      }
    }
  }

}
