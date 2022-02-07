import { User } from './../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css'],
})
export class MotivationComponent implements OnInit {
  u: User = new User();

  constructor(
    private _userService: UserService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((res) =>
      this._userService
        .getUser(Number(res.get('id')))
        .subscribe((res) => (this.u = res))
    );
  }
}
