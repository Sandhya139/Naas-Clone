import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  profilePicture = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  authService = inject(LoginAuthService);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("orgDetails");
    this.authService.signOut();
  }
  
}
