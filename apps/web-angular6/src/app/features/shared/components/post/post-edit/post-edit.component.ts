import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @Output()
  addPost = new EventEmitter<{
    title: string;
    name: string;
    email: string;
    description: string;
  }>();
  constructor() {}

  ngOnInit() {}
  onSubmit(postData: any) {
    console.log(postData.value);
    this.addPost.emit(postData);
  }
}
