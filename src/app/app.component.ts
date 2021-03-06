import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-sample';
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    keepMeLogin: new FormControl(true)
  });

  constructor(private userService: UserService) {
  }

  login(form: FormGroup) {
    console.log(form.valid);
    if (!form.valid) {
      return false;
    }
    this.userService.loginUser(form.value)
      .subscribe(value => {
        console.log(value);
      });
  }
}
