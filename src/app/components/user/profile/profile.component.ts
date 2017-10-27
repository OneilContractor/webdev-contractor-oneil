import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  userId: string;
  user = {};
  username: string;
  lastName: string;
  firstName: string;
  password: string;
  errorFlag: boolean;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.userService.findUserById(this.userId)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.username = user['username'];
          this.lastName = user['lastName'];
          this.firstName = user['firstName'];
          this.password = user['password'];
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );

  }

  editProfile() {
    this.user['username'] = this.profileForm.value.username;
    this.user['password'] = this.profileForm.value.password;
    this.user['firstName'] = this.profileForm.value.firstName;
    this.user['lastName'] = this.profileForm.value.lastName;
    this.userService.updateUser(this.userId, this.user)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.username = user['username'];
          this.lastName = user['lastName'];
          this.firstName = user['firstName'];
          this.password = user['password'];
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }
}
