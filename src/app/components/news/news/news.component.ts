import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  faThumbsUp = faThumbsUp;

  constructor() { }

  ngOnInit(): void {
  }
}
