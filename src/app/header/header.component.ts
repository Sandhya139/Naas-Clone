import { Component, inject } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  authService = inject(LoginAuthService);

  signOut(){
    this.authService.signOut();
  }
  
}
