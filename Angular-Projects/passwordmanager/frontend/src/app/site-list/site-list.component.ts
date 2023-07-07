import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {

  constructor(private siteService: Site) { }

  ngOnInit(): void {
  }

  onSubmit(values: Object){
      console.log(values);
  }

}
