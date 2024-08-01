import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OrgDetailsService } from '../org-details.service';

@Component({
  selector: 'app-create-org',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-org.component.html',
  styleUrl: './create-org.component.css'
})
export class CreateOrgComponent {
  orgDetailsService = inject(OrgDetailsService);

  formData = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    companyName: new FormControl('')
  })

  formSubmit(){
    this.orgDetailsService.CreateOrg(
      this.formData.value.firstName!,
      this.formData.value.lastName!,
      this.formData.value.companyName!
    );
  }
}
