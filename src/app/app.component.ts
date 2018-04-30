import { Component } from '@angular/core';
import { Post } from './list-of-status/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor() {
    this.posts = [
      new Post('Angular is awesome', 3, 1),
      new Post('Everyone should learn Angular', 1, 0),
    ];
  }

  addPost(status: HTMLInputElement): boolean {
    console.log(`Your status : ${status.value}`);
    this.posts.push(new Post(status.value, 0, 0));
    status.value = '';
    return false;
  }
}
