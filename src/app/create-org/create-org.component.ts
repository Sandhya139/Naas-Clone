import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OrgDetailsService } from '../org-details.service';
import { Store } from '@ngrx/store';
import { OrgState } from '../states/organisation/org.reducer';
import { createOrg } from '../states/organisation/org.actions';

@Component({
  selector: 'app-create-org',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-org.component.html',
  styleUrl: './create-org.component.css'
})
export class CreateOrgComponent {
  orgDetailsService = inject(OrgDetailsService);
  private store = inject(Store<OrgState>);

  formData = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    companyName: new FormControl('')
  })

  formSubmit(){
    const { firstName, lastName, companyName } = this.formData.value;
    this.store.dispatch(createOrg({ firstName: firstName!, lastName: lastName!, companyName: companyName! }));
    console.log('Dispatching createOrg action with:', { firstName, lastName, companyName });
    this.orgDetailsService.CreateOrg(
      this.formData.value.firstName!,
      this.formData.value.lastName!,
      this.formData.value.companyName!
    );
  }
}
