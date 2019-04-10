import {Component} from '@angular/core';
import {faCrown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Ratings';
  faCrown = faCrown;
}
