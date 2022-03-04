import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input("postInfo") post: any;

  @Output() deletePost: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deletePost.emit(this.post);
  }

}
