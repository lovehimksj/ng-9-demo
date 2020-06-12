import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'login-sample';
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    keepMeLogin: new FormControl(true)
  });

  constructor(private userService: UserService, private router: Router) {
  }

  login(form: FormGroup) {
    console.log(form.valid);
    if (!form.valid) {
      return false;
    }
    this.userService.loginUser(form.value)
      .subscribe(value => {
        if (value.status === 200) {
          this.router.navigate(['', 'admin']);
        }
      });
  }

}
