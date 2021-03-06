import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  errorFlag: boolean;
  error = '';

  constructor(private sharedService: SharedService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  register() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    if (username && password) {
      if (this.registerForm.value.password === this.registerForm.value.verifyPassword) {
        const user = {
          username: this.registerForm.value.username,
          password: this.registerForm.value.password,
          firstName: this.registerForm.value.firstName,
          lastName: this.registerForm.value.lastName,
          email: this.registerForm.value.email
        };
        this.userService.register(user)
          .subscribe((regUser) => {
          alert('registered');
            this.sharedService.user = regUser;
            this.router.navigate(['/login']);
          });
      } else {
        this.error = 'Passwords do not match!';
      }
    } else {
      this.error = 'Please enter value for username and password';
    }
    }
}
