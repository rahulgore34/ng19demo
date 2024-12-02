import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule, NonNullableFormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, AsyncValidator} from "@angular/forms";
import { map, Observable, of } from 'rxjs';

// In below approach invalid email ist is configurd directly in custum validator fn.
// const forBiddenEmailsValidator = (control: AbstractControl):ValidationErrors | null => {
//   const email = ['test@test.test'];
//   return email.includes(control.value) ? {forbidden:'Email not allowed'}: null;
// }


const forBiddenEmailsValidator = (emails: string[]):ValidatorFn => {
 return (control: AbstractControl):ValidationErrors | null => {
   return emails.includes(control.value) ? {forbidden:'Email not allowed'}: null;;
}

}

const asyncRoleValidator = (control: AbstractControl): Observable<ValidationErrors|null>=>{
  const allowdRoles = ['QA', "Dev"];
  return of(control.value).pipe(
    map(v => allowdRoles.includes(v)? null: {forbiddenRole: `${v} not allowd`})
  )
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng19demo';
fb = inject(NonNullableFormBuilder);
form = this.fb.group({
  email: this.fb.control('', {
    validators: [Validators.required, Validators.email,
      //  forBiddenEmailsValidator // this is in first approach
       forBiddenEmailsValidator(['demo@demo.demo']) //thisis in second approach
      ]
  
  }),
  role: this.fb.control('', {
    asyncValidators: [asyncRoleValidator]
  })
})

onSubmit() {
  console.log(this.form);
  
}

}
