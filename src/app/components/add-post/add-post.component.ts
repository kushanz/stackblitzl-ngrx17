import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostInterface } from '../posts/state/post.model';
import { Store } from '@ngrx/store';
import { Appstate } from './../../app-store/app.state';
import { addPost } from '../posts/state/post.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<Appstate>, private router: Router) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  onAddPost() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      const post: PostInterface = {
        id: null,
        title: this.postForm.value.title,
        description: this.postForm.value.description,
      };
      this.store.dispatch(addPost(post));
    }
    // this.postForm.reset();
    this.router.navigate(['posts']);
  }
}
