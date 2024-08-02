import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrgDetailsService {

  router = inject(Router);
  constructor() { }

  CreateOrg(firstName: string, lastName: string, companyName: string){
    console.log("Org created");
    console.log(firstName, lastName, companyName);
    sessionStorage.setItem("orgDetails", JSON.stringify({firstName, lastName, companyName}));
    this.router.navigate(['dashboard']);
  }
}
