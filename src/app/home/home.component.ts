import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// export class HomeComponent {
  user = new User();
  isLoggedin: boolean = false;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }

  login(user: User) {
    this.authService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
      console.log('authToken')
      this.isLoggedin = true;
    });
  }

  isLoggedIn() {
    //debugger;
    if (localStorage.getItem('authToken') == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.clear();
    this.isLoggedin = false;
    return this.isLoggedin;
  }
}
