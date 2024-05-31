import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  ExtraOptions,
  PreloadAllModules,
} from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { CounterComponent } from './app/components/counter/counter.component';
import { RxjscomComponent } from './app/components/rxjscom/rxjscom.component';
import { SignalsComponent } from './app/components/signals/signals.component';
import { PostsComponent } from './app/components/posts/posts.component';
import { AddPostComponent } from './app/components/add-post/add-post.component';
import { EditPostComponent } from './app/components/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
  { path: 'rxjs', component: RxjscomComponent },
  { path: 'signal', component: SignalsComponent },
  // Add more routes as needed
];

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
  }
);
