import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/shared/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  
  postId!: string;
  singlePost!: IPost;
 @Input() public data!: IPost
  constructor(private route: Router, private router: ActivatedRoute,  private postService: PostService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
     this.postId = params['id'];
  
    });
  }
  fetchPost(){
    this.postService.getAllPosts().subscribe({
        next:(res)=>{
          this.singlePost = res.filter(post=> post.permalink === this.singlePost?.permalink)[0];
        }
    })
    }
}
