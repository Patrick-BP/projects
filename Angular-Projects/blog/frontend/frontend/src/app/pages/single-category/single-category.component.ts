import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { ICategory } from 'src/app/shared/category.interface';
import { IPost } from 'src/app/shared/post.interface';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
categoryName!: String;
  postsBycategory!: IPost[]
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val=>{
     this.categoryName = val['category'];
      this.postService.getPostByCategory(val['id']).subscribe({
        next:(res)=>{
          this.postsBycategory = res.data
          
        }
      })
    })
  }

}
