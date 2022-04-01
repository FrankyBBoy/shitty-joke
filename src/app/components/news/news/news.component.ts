import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  faThumbsUp = faThumbsUp;

  jokes: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.jokes = firestore.collection('jokes', ref => ref.limit(10).orderBy('created_at', 'desc')).valueChanges();
  }

  ngOnInit(): void {
  }
}
