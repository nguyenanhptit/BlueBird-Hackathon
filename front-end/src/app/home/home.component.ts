import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService) {
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      author: this.token.getAuthor()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
