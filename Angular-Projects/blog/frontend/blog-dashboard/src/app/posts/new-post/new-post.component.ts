import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { ICategory } from 'src/app/shared/category.interface';
import { IPost } from 'src/app/shared/post.interface';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

 postForm = inject(FormBuilder).nonNullable.group({
  title:['', [Validators.required, Validators.minLength(10)]],
  content:['', Validators.required],
  categoryId:['', Validators.required],
  excerpt:['', [Validators.required, Validators.minLength(50)]],
  permalink:[{value:' ', disabled:true}],
  imgPath:['', Validators.required],
 });

get fc(){
  return this.postForm.controls
}
categories!: ICategory[];

  imgSrc?: any =  'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  selectedImg!: any;
  constructor(private categoryService: CategoryService, private postservive: PostService ) { }


  refreshList() {
      this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  ngOnInit(): void {
    this.refreshList();
  }
  handleTitle(){
    const input = this.postForm.value.title
    this.postForm.patchValue({permalink: input?.split(" ").join('-')})
  }
  showpreview($event: any){
    console.log($event.target.files[0]);
    const reader =  new FileReader();
    reader.onload = (e)=>{
      this.imgSrc = e.target?.result;
    }

    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }
  onsubmit(){
    
    const postData: IPost = {
      title: this.postForm.value.title,
      permalink: this.postForm.get('permalink')?.value,
      categoryId: this.postForm.value.categoryId,
      imgPath: '',
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content,
      status: 'new'
    }
    this.postservive.savePost(this.selectedImg, postData).subscribe({
      next:(res)=>{
        console.log('data saved');
      },
      error:(error)=>{},
      complete:()=>{}
    })
  }
}
