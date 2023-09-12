import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OnlyLetterDirective } from '../directives/only-letter.directive';
import { SearchWithDebounceTimeDirective } from '../directives/search-with-debounce-time.directive';
import { MyCurrencyPipe } from '../pipes/my-currency.pipe';
import { StarComponent } from '../svg/star/star.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    OnlyLetterDirective,
    MyCurrencyPipe,
    StarComponent,
    SearchWithDebounceTimeDirective,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Angular';
  searchText = '';

  search(searchText: string) {
    this.searchText = searchText;
  }
}