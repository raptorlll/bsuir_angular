import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[timeInput]'
})
export class TimeInputDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('focusout')
  onMouseLeave() {
    this.el.nativeElement.value = this.format(this.el.nativeElement.value || '');
  }

  formatNullValue(value: string): string {
    return value === '' || value.length < 2 ? '00' : value;
  }

  format(value): string {
    const str = value.split(':').join('');
    let hours = str.slice(0, 2);
    let minutes = str.substr(2, 2);
    let seconds = str.substr(4, 2);

    hours = this.formatNullValue(hours);
    minutes = this.formatNullValue(minutes);
    seconds = this.formatNullValue(seconds);

    return `${hours}:${minutes}:${seconds}`;
  }
}
