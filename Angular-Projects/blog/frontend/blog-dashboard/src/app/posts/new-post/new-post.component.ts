import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { ICategory } from 'src/app/shared/category.interface';
import { IPost } from 'src/app/shared/post.interface';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {ActivatedRoute, Router} from '@angular/router'
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
uploadedImgPath!:string;
isEdit : boolean = false
postId!:string;

imgSrc?: any =  'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
selectedImg!: any;
postToEdit!: IPost

  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private postservive: PostService,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private router: Router 
     ) { }


  refreshList() {
      this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  ngOnInit(): void {
    this.refreshList();
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.postId = id;
      if(id){
        this.isEdit = true;
        this.postService.getPost(id).subscribe({
          next:(res)=>{
            this.postToEdit = res.data;
            
          },
          error:(error)=>{},
          complete:()=>{
            this.postForm.patchValue({
              title: this.postToEdit.title,
              excerpt: this.postToEdit.excerpt,
              categoryId: this.postToEdit.categoryId,
              content: this.postToEdit.content,
              
            });
            this.imgSrc = this.postToEdit.imgPath;
          }
        })
      }
    });
  }
  handleTitle(){
    const input = this.postForm.value.title
    this.postForm.patchValue({permalink: input?.split(" ").join('-')})
  }
  showpreview($event: any){
    
    const reader =  new FileReader();
    reader.onload = (e)=>{
      this.imgSrc = e.target?.result;
    }

    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

   

  onsubmit(){
  
    if(this.postId){
      const postData: IPost = {
        title: this.postForm.value.title,
        permalink: this.postForm.get('permalink')?.value,
        categoryId: this.postForm.value.categoryId,
        excerpt: this.postForm.value.excerpt,
        content: this.postForm.value.content,
        
      }

      const filePath = `postIMG/${Date.now()}`;
      this.storage.upload(filePath, this.selectedImg).then(()=>{
      this.storage.ref(filePath).getDownloadURL().subscribe(URL=>{
        postData.imgPath  = URL;
       
        this.postservive.updatePost(postData, this.postId).subscribe({
              next:(res)=>{
                console.log(res, 'data saved');
              },
              error:(error)=>{
                console.log(error);
              },
              complete:()=>{
                this.postForm.reset();
                this.router.navigate(['/posts']);
              }
            })
  
  
        })
       
      })

    }else{
      const postData: IPost = {
        title: this.postForm.value.title,
        permalink: this.postForm.get('permalink')?.value,
        categoryId: this.postForm.value.categoryId,
        imgPath: '',
        excerpt: this.postForm.value.excerpt,
        content: this.postForm.value.content,
        status: 'new'
      }
  
  
      const filePath = `postIMG/${Date.now()}`;
      this.storage.upload(filePath, this.selectedImg).then(()=>{
      this.storage.ref(filePath).getDownloadURL().subscribe(URL=>{
        postData.imgPath  = URL;
       
        this.postservive.save(postData).subscribe({
              next:(res)=>{
                console.log(res, 'data saved');
              },
              error:(error)=>{
                console.log(error);
              },
              complete:()=>{
                this.postForm.reset()
              }
            })
  
  
        })
       
      })
     
    }
  
   
  }
}
