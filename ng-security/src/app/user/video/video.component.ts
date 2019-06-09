import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {StatusService} from '../service/status.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {


  @Input()
  dataQuestion = false;

  status: boolean;


  @Output() take = new EventEmitter<boolean>();
  /* @Output() talk: EventEmitter<boolean> = new EventEmitter<boolean>();*/

  @ViewChild('videoPlayer') videoPlayer: ElementRef;


  constructor(private statusService: StatusService) {
    console.log('1');


  }

  playVideo() {
    if (this.dataQuestion === true) {
      this.playPause();
      this.dataQuestion = false;
      this.statusService.changeStatus(this.dataQuestion);
    }
  }

  reload() {
    this.dataQuestion = true;
  }

  playPause() {
    this.videoPlayer.nativeElement.play();
    setTimeout(() => {
      this.pause();
    }, 3000);
  }

  pause() {
    this.videoPlayer.nativeElement.pause();
  }

  VideoComponent() {
    this.playVideo();
    {
      if (this.dataQuestion === true) {
        this.playPause();
        this.dataQuestion = false;
        this.statusService.changeStatus(this.dataQuestion);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const changeData = changes.dataQuestion;
    if (changeData.currentValue === true) {
      console.log('play video');
      this.playPause();
    } else {
      console.log('No play');
    }
  }

  ngOnInit(): void {
  }


}
