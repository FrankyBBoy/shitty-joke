import { Component } from '@angular/core';
import { faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';
import { faToilet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shitty-joke';
  faThumbsUp = faThumbsUp;
  faUser = faUser;
  faToilet = faToilet;
}
