import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  templateUrl: './star.component.svg',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input()
  color = 'black';

  @Input()
  width = 24;

  @Input()
  height = 24;
}
