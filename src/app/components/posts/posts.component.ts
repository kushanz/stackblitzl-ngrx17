import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getPostState } from './state/post.selectors';
import { Appstate } from './../../../app/app-store/app.state';
import { PostInterface } from './state/post.model';
import { deletePost } from './state/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<any>;
  constructor(private store: Store<Appstate>) {}

  ngOnInit() {
    this.posts$ = this.store.select(getPostState);
  }
  deletePost(post) {
    console.log(post);
    this.store.dispatch(deletePost(post));
  }
}
