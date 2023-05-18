import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
})
export class VideoplayerComponent {
  playingNow!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.playingNow = data.videourl;
  }
}
