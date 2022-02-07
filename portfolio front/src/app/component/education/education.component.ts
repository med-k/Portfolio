import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
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
