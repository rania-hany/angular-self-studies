import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { first, map, take } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient ) { }

  fetchPosts() {
    return this.http.get<[any]>("https://rania-4d9d1-default-rtdb.firebaseio.com/posts.json").pipe(
      map(x => {
        x.sort(() => (Math.random() > .5) ? 1 : -1);
        return x.slice(0, 7)
      }));
  }

}
