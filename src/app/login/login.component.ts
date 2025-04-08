import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  router = inject(Router);
  onSubmit() {
    alert('submitted ' + this.email);
    if (this.email.includes('admin')) {
      this.router.navigate(['/dashboard']);
    }
  }
}
