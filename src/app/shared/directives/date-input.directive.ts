import {Directive, ElementRef, HostListener, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[dateInput]'
})
export class DateInputDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('focusout')
  onMouseLeave() {
    this.el.nativeElement.value = this.format(this.el.nativeElement.value || '');
    const event = document.createEvent('HTMLEvents');
    event.initEvent('change', false, true);
    this.el.nativeElement.dispatchEvent(event);
  }

  formatNullValue(value: string): string {
    return value === '' || value.length < 2 ? '01' : value;
  }

  format(value): string {
    const str = value.split('-').join('');
    let year = str.slice(0, 4);
    let month = str.substr(4, 2);
    let day = str.substr(6, 2);

    year = year === '' || year.length < 4 ? (new Date()).getFullYear() : year;
    month = this.formatNullValue(month);
    day = this.formatNullValue(day);

    return `${year}-${month}-${day}`;
  }
}
