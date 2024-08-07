import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Store } from '@ngrx/store';
import { selectCompanyName } from '../states/organisation/org.selector';
import { AppState } from '../states/app.state';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [HeaderComponent,CommonModule, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{
  companyName$ = of('');

  constructor(private store: Store<AppState>) {
    this.companyName$ = this.store.select(selectCompanyName);
    this.companyName$.subscribe(name => console.log("Org created", name));
  }
  // companyName = JSON.parse(sessionStorage.getItem("orgDetails")!).companyName;
}
