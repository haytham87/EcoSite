import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../models/bs/articles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  // getArticles():Observable<Articles[]>{
  //   // return this.http.get<Articles[]>(`${environment.URL}/articlesData`)
  //   return 'sfs'
  // }
}