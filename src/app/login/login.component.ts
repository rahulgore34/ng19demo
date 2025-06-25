import { AfterViewInit, Component, ElementRef, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpinputDirective } from '../otpinput.directive';
import { OtpComponent } from '../commoncomps/otp/otp.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, OtpComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email = '';
  router = inject(Router);
  otpDigits = [
    {
      value: ''
    },
    {
      value: ''
    },
    {
      value: ''
    },
    {
      value: ''
    },
  ];
  @ViewChildren("otpinputs") otpinputs!: QueryList<ElementRef>;
  dataService = inject(DataService);
  ngOnInit(): void {

  }
  onSubmit() {
    if (this.email.includes('admin')) {
      this.router.navigate(['/dashboard']);
    }
  }


  testAWSAPI() {
this.dataService.post().subscribe({
  next:(data)=>{
    console.log('data',data);

  },
  error:(e)=>{
    console.log('Error ',e);

  }
})
  }



}
