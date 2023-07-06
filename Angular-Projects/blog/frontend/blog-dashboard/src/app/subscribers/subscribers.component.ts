import { Component, OnInit } from '@angular/core';
import { ISubscription } from '../shared/subscription.interface';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  subscribersList!: any;
  constructor(private subscriberService: SubscribersService) { }

  ngOnInit(): void {
    this.fetchSubscription();
  }

  deleteById(id: string){
    this.subscriberService.deleteSubscriber(id).subscribe({
      next:(res)=>{},
      error:(error)=>{},
      complete:()=>{
        this.fetchSubscription();
      }
    })
  }
  
  fetchSubscription(){
      this.subscriberService.getAllSubscribers().subscribe({
        next:(res)=>{
          this.subscribersList = res;  
        },
        error:(error)=>{},
        complete:()=>{}
      })
  }
}
