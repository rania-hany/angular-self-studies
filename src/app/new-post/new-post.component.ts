import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public postForm :FormGroup;

  @Output() submitPost: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'title': new FormControl('Default Title'), 
      'body': new FormControl()
    })
  }

  public onSubmit (){
    console.log(this.postForm.value);
    this.submitPost.emit( this.postForm.value)
  }

}
