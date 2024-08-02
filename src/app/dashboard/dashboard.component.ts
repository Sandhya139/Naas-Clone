import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  companyName = JSON.parse(sessionStorage.getItem("orgDetails")!).companyName;
}
