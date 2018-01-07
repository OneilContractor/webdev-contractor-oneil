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
  errorFlag: boolean;
  errorMsg = '';

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  register() {
      const user = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      };
      alert(user.username);
      this.userService.createUser(user)
        .subscribe(
          (user1: any) => {
            this.errorFlag = false;
            this.router.navigate(['user/' + user1._id]);
          },
          (error: any) => {
            this.errorFlag = true;
          }
        );
    }
}
