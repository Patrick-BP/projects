import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/shared/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postList!: IPost[];
  featuredPosts!: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts()
    
  }

  fetchPosts(){
    this.postService.getAllPosts().subscribe({
      next:(res)=>{
        this.postList = res.filter(post => post.isFeatured === false).slice(-6)
        this.featuredPosts = res.filter(post => post.isFeatured === true).slice(-4)
      },
      error:(error)=>{},
      complete:()=>{
        
      }
    })
  }

}
