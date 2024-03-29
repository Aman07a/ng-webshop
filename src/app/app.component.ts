import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-webshop';
  signedin = false;
  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});

    setTimeout(() => {
      this.authService.signout().subscribe(() => {});
    }, 50000);
  }
}
