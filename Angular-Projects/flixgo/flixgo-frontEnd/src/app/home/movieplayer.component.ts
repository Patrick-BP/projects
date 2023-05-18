import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movieplayer',
  templateUrl: './movieplayer.component.html',
  styleUrls: ['./movieplayer.component.css']
})
export class MovieplayerComponent implements OnInit {

  playingNow!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.playingNow = data.videourl;
  }

  ngOnInit(): void {
  }

}
