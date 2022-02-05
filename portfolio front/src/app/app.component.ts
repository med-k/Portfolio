import { User } from './models/user';
import { UserService } from './services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  u: User = new User();
  constructor(
    private _userService: UserService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  message = 'hello world';
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((res) =>
      this._userService
        .getUser(Number(res.get('id')))
        .subscribe((res) => (this.u = res))
    );
  }
}
