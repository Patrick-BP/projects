import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/shared/post.interface';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
 postId!: string;
 simularPosts!: IPost[]
 singlepost!: IPost;


  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.fetchPost();

  }
fetchPost(){
this.postService.getAllPosts().subscribe({
    next:(res)=>{
      this.singlepost = res.filter(post=> post._id === this.postId)[0]
      this.simularPosts = res.filter(post => post.categoryId.name === this.singlepost?.categoryId.name && post._id !== this.singlepost?._id)
    }
})


}
}
