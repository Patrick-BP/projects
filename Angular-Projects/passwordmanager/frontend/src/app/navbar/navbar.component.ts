import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: string
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string).name
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/'])
  }
}
