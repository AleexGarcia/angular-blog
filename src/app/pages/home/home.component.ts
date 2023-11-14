import { Component, OnInit } from '@angular/core';
import { TArticle } from '../../types/types';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredArticle?: TArticle;
  private articles: TArticle[] = [];
  otherArticles: TArticle[] = [];
  ngOnInit(): void {
    this.featuredArticle = dataFake[0];
    this.articles = dataFake.filter((article, index) => index > 0);
    this.setOtherArticles();
  }

  setOtherArticles() {

    let refIndex = 0;
    this.otherArticles = this.articles.slice(refIndex, refIndex + 3);
    refIndex = refIndex + 3;

    setInterval(() => {
      if (refIndex < this.articles.length) {
        this.otherArticles = this.articles.slice(refIndex, refIndex + 3);
        refIndex = refIndex + 3;
      } else {
        refIndex = 0;
        this.otherArticles = this.articles.slice(refIndex, refIndex + 3);
      }
    }, 5000);
    
  }
}
