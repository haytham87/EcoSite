import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../core/services/articles.service';
import { Articles } from '../../../core/models/articles';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles:Articles[]=[]
  p: number = 1;
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    // this.articlesService.getArticles().subscribe((response) => {
    //   this.articles = response
    //   console.log('articles', response)
    // },
    // (error)=> {
    //   console.log(error)
    // })
  }

}
