import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  username: string;
  password: string;
  verifyPassword: string;
  lastName: string;
  firstName: string;
  email: string;
  errorFlag: boolean;
  errorMsg = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    const user  = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    this.userService.createUser(user)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.router.navigate(['user/' + user._id]);
          },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Failed to create User!';
        }
      );
  }
}
