import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {VideoComponent} from './video/video.component';
import {StatusService} from './service/status.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {

  board: string;
  errorMessage: string;

  @ViewChild(VideoComponent) child: VideoComponent;
  title = 'frontend';
  msg = false;

  receigeveMsg($event) {
    this.msg = $event;
  }

  talkBack($event) {
    this.msg = $event;

  }

  ngAfterViewInit(): void {
    this.msg = this.child.dataQuestion;
  }

  constructor(private statusService: StatusService,
              private userService: UserService) {
  }



  ngOnInit() {
    this.statusService.currentStatus.subscribe(status => this.msg = status);

    this.userService.getUser().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
