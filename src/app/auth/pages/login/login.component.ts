import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authServices: AuthService) {}

  ngOnInit(): void {}
  login() {
    this.authServices.login().subscribe((res) => {
      console.log(res);

      if (res.id) {
        this.router.navigate(['./heroes']);
      }
    });
    // this.router.navigate(['./heroes']);
  }
}
