import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from './model/user';
import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';
import { AuthService } from './services/auth.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petsportalui';
  // user = new User();
  // isLoggedin: boolean = false;

  constructor(private authService: AuthService) {}

  // login(user: User) {
  //   this.authService.login(user).subscribe((token: string) => {
  //     localStorage.setItem('authToken', token);
  //     console.log('authToken')
  //     this.isLoggedin = true;
  //   });
  // }

  // isLoggedIn() {
  //   //debugger;
  //   if (localStorage.getItem("authToken") == null) {
  //     this.isLoggedin = false;
  //     return this.isLoggedin;
  //   }
  //   else {
  //     return true;
  //   }
  //}

  // ngOnInit() {
  // }
}
