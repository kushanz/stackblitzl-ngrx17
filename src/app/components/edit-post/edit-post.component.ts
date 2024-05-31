import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostInterface } from '../posts/state/post.model';
import { Store } from '@ngrx/store';
import { Appstate } from './../../app-store/app.state';
import { addPost, updatePost } from '../posts/state/post.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../posts/state/post.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  postSubscription: Subscription;
  post: PostInterface;
  constructor(
    private route: ActivatedRoute,
    private store: Store<Appstate>,
    private router: Router
  ) {}

  ngOnInit() {
    // --------------------------------------
    this.route.params.subscribe((params) => {
      const id = params.id;
      // console.log(params);
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          this.createForm();
        });
    });
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  createForm() {
    this.editForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
      ]),
    });
  }
  onEditPost() {
    if (this.editForm.valid) {
      const title = this.editForm.value.title;
      const description = this.editForm.value.description;
      const post: PostInterface = { id: this.post.id, title, description };

      this.store.dispatch(updatePost(post));
      this.router.navigate(['posts']);
    }
  }
}
