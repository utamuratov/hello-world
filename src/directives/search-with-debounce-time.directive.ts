import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Directive({
  selector: '[appSearchWithDebounceTime]',
  standalone: true
})
export class SearchWithDebounceTimeDirective implements AfterViewInit {
  /**
   *
   */
  @Input()
  debounceTime = 1000;

  /**
   *
   */
  @Output()
  search = new EventEmitter<string>();

  /**
   *
   */
  constructor(private elementRef: ElementRef) {}

  /**
   *
   */
  ngAfterViewInit(): void {
    fromEvent(this.elementRef.nativeElement, 'keyup')
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.search.emit(this.elementRef.nativeElement.value);
      });
  }
}
