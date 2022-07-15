import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  date: number=Date.now();
  error = null;

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.authService.SignIn(this.form.controls['username'].value, this.form.controls['password'].value);
      this.authService.SignIn(this.form.controls['username'].value, this.form.controls['password'].value);
    }
  }


}
