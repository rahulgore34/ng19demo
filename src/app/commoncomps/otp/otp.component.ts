import { AfterViewInit, Component, computed, ElementRef, EventEmitter, input, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

interface IObject {
  value: string|number
}
@Component({
  selector: 'app-otp',
  imports: [],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent implements OnInit, AfterViewInit {
  otplength = input.required<number>();
  generatedArray = computed(()=> this.transformNumToArray(this.otplength()))

  @ViewChildren("otpinputs") otpinputs!: QueryList<ElementRef>;
  otpStr = '';
  ngOnInit(): void {
    console.log('child init ',this.otplength());
   console.log(this.generatedArray());

  }

    ngAfterViewInit(): void {
    console.log(' ', this.otpinputs);
   setTimeout(() => {
     this.otpinputs.first?.nativeElement.focus()
   }, 2000);
  }

  private transformNumToArray(num: number): IObject[] {
    const arr: IObject[] = [];
    for (let i = 0; i < num; i++) {
      arr.push({ value: '' }); // Or any other desired value
    }
    return arr;
  }

    onInput(e: any, index: number) {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    if (!value) return;
  this.otpStr += value;
console.log('on input ',this.otpStr);
  if (index < this.generatedArray().length - 1) {
      this.otpinputs.get(index + 1)?.nativeElement.focus()
    }

  }

  getOTP() {

console.log('FIAL OPT ',this.otpStr);

  }
}
