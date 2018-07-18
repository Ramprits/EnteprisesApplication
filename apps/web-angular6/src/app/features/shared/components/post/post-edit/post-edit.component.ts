import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('postForm') signUpForm: NgForm;
  @Output()
  addPost = new EventEmitter<{
    title: string;
    name: string;
    email: string;
    description: string;
  }>();
  genders = ['Male', 'Female', 'Student'];
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.signUpForm);
  }
}
