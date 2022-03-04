import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shitty-joke';
  faThumbsUp = faThumbsUp;
}
