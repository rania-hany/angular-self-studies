import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { AddPostAction, DeletePostAction } from '../store/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // public posts: Post[] = [];

  public posts: Observable<{posts: Post[]}>;
  public addingNewPost: boolean = false;
  
  
  constructor(private postsService: PostsService, private store: Store<{blog: {posts: Post[]}}>) { }

  ngOnInit(): void {
    this.posts = this.store.select('blog');
    this.postsService.fetchPosts().subscribe((response: Array<Post>)=>{
      console.log(response);
      // this.posts = response;
    });
  }

  public addNewPost (event) {
    console.log("RESP: ", event);
    event.userId = "New One!";
    this.store.dispatch(new AddPostAction(event));
    // this.posts.push(event);
  }

  public deletePost(event) {
    console.log("DELETE", event);
    this.store.dispatch(new DeletePostAction(event));
  }
}

export interface Post {
  title: string;
  userId: string;
  body: string;
}