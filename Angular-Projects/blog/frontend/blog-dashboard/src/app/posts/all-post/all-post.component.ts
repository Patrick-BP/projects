import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/shared/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  isChecked: boolean = false;
  postsList!: IPost[];
  isFeatured: boolean = false

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPosts();
  }


  fetchPosts(){
    this.postService.getAllPosts().subscribe({
      next:(res)=>{
        this.postsList = res
      },
      error:(error)=>{
        console.log(error.message);
      },
      complete:()=>{

      }
    })
  }

  linkToEdit(postId?: string){
    this.router.navigate(['/posts/new', postId]);
  }

  deleteById(postid?: string){
    this.postService.deletePost(postid as string).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(error)=>{},
      complete:()=>{
        this.fetchPosts();
      }
    })
  }

  featuredById(isFeatured?: boolean , id?:string){
    this.postService.setFeatured({isFeatured : !isFeatured },id).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        console.log(error.message);
      },
      complete:()=>{
        this.fetchPosts();
      }
    })
  }
}
