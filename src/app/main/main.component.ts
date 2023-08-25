import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { IPost } from '../types';
import { MatDialog } from '@angular/material/dialog';
import { PostmodalComponent } from '../postmodal/postmodal.component';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  posts: IPost[] = [];
  loading = true;

  constructor(private services: PostsService,
              private dialog: MatDialog,
              private isAuth: AuthServiceService) {
  }

  openPostModal(post: IPost) {
    if (this.isAuth.getStatus()) {
      const dialogRef = this.dialog.open(PostmodalComponent, {
        width: '400px',
        data: post
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('Modal closed: ', result);
      });
    }
  }

  ngOnInit(): void {
    this.services.getPosts().subscribe(post => {
      this.posts = post;
      this.loading = false;
    });
  }
}
