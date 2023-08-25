import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { IPost } from '../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  posts: IPost[] = [];
  loading = true;

  constructor(private services: PostsService) {
  }

  getInfo() {
    console.log(this.posts);
  }

  ngOnInit(): void {
    this.services.getPosts().subscribe(post => {
      this.posts = post;
      this.loading = false;
    });
  }
}
