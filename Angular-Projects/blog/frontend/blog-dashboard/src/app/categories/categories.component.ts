import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ICategory } from '../shared/category.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  editCategoryId?: string; 
  categoryForm: FormGroup;
  isEdit: boolean = false;
  responseMessage!: string;
  categories: ICategory[] = [];

  constructor(
    private categoryService: CategoryService, 
    private ngxLoader: NgxUiLoaderService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.categoryForm = this.formBuilder.group({
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.isEdit  && this.editCategoryId) {
      this.ngxLoader.start();
      const data = { name: this.categoryForm.value.category };
      this.categoryService.editCategoryById(this.editCategoryId, data).subscribe({
        next: (res) => {
          if (res.error == true) {
            this.ngxLoader.stop();
            this.responseMessage = res.message;
          } else {
            this.responseMessage = res.message;
          }
        },
        error: (err) => {
          this.ngxLoader.stop();
          if (err.error?.message) {
            this.responseMessage = err.error?.message;
          }
        },
        complete: () => {
          this.ngxLoader.stop();
          this.categoryForm.reset();
          this.refreshList();
          this.isEdit = false;
          this.toastr.success('Hello world!', 'Toastr fun!');
        }
      });
    } else {
      this.ngxLoader.start();
      const data = { name: this.categoryForm.value.category };
      this.categoryService.addCategory(data as ICategory).subscribe({
        next: (res) => {
          if (res.error == true) {
            this.ngxLoader.stop();
            this.responseMessage = res.message;
          } else {
            this.responseMessage = res.message;
          }
        },
        error: (err) => {
          this.ngxLoader.stop();
          if (err.error?.message) {
            this.responseMessage = err.error?.message;
          }
        },
        complete: () => {
          this.ngxLoader.stop();
          this.categoryForm.reset();
          this.refreshList();
        }
      });
    }
  }

  refreshList() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  ngOnInit(): void {
    this.refreshList();
  }

  deleteById(id?: string) {
    this.categoryService.deleteCategoryByid(id).subscribe({
      next: (res) => {},
      error: (error) => {},
      complete: () => {
        this.refreshList();
      }
    });
  }

  editById(category: ICategory) {
    this.isEdit = true;
    this.categoryForm.patchValue({ category: category.name });
    this.editCategoryId = category._id;
  }
}