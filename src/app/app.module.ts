import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from '../layouts/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RestrictInputDirective } from './directives/restrict-input.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { appReducer } from './app-store/app.state';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
// import { environment } from 'src/environment';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
    }),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CounterComponent,
    PostsComponent,
    CounterButtonsComponent,
    RestrictInputDirective,
    AddPostComponent,
    EditPostComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
