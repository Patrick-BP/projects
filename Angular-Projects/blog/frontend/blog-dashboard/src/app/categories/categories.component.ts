import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { };

onSubmit(formData: any){
  console.log(formData.value);

  
}


  ngOnInit(): void {
  }

}
