import { Component, OnInit, Input } from '@angular/core';
import { Post } from './Post.model';

@Component({
  selector: 'app-list-of-status',
  templateUrl: './list-of-status.component.html',
  styleUrls: ['./list-of-status.component.css']
})
export class ListOfStatusComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  like(): boolean {
    this.post.like();
    return false;
  }

  dislike(): boolean {
    this.post.dislike();
    return false;
  }


  ngOnInit() {
  }
}
