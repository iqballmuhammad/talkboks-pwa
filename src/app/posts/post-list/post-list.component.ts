import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any;
  constructor(public postService: PostService) {
  }
  ngOnInit() {
    this.postService.getPost()
      .subscribe(data => {
        this.posts = data['data']['items'];
      });
  }

  showPost() {

  }
}
