import { AfterViewInit, Directive, ElementRef, input, QueryList, Renderer2, ViewChildren, viewChildren } from '@angular/core';

@Directive({
  selector: '[appOtpinput]'
})
export class OtpinputDirective implements AfterViewInit {
  index = input(0);
  @ViewChildren("otpinputs") otpinputs!: QueryList<ElementRef>;
  constructor(private el: ElementRef, private rd: Renderer2) {
    console.log('I am inside directive');

  }

  ngAfterViewInit(): void {
    console.log('INdex', this.index());
    if (this.index() === 0) {
      this.el.nativeElement.focus()
    }

  }


}
