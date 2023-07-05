import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/shared/category.interface';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
 categories!: ICategory[]
  constructor(private categorySerive: CategoryService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }


  fetchCategories(){
    this.categorySerive.getAllCategories().subscribe({
      next: (res)=>{
        this.categories = res
    
      }
    })
  }
}
