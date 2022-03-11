import { Component } from '@angular/core';
import { faArrowAltCircleRight, faToilet } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'shitty-joke';
  faUser = faUser;
  faToilet = faToilet;
  faArrowAltCircleRight = faArrowAltCircleRight;

  constructor(public auth: AngularFireAuth) {
  }

  logout() {
    this.auth.signOut();
  }

}
