import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular'
import { AngularFireAuthModule, LANGUAGE_CODE } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login/login.component';
import { NewsComponent } from './components/news/news/news.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    //provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    { provide: LANGUAGE_CODE, useValue: 'fr' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
