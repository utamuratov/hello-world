import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyLetter]',
  standalone: true
})
export class OnlyLetterDirective {
  @HostListener('input', ['$event'])
  input(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // *Replace non unicode letters to ''
    inputElement.value = inputElement.value.replace(/[^\p{Letter}]/u, '');
  }
}
