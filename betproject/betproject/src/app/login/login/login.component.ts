import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { InscriptionComponent } from 'src/app/inscription/inscription/inscription.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = null;
  hide = true;
  miseUser: Number = 0;
  error = "";
  loading: boolean = false;
  message;
  constructor(public dialog: MatDialog, private auth: AuthService, private route: ActivatedRoute,
    private router: Router,private mess:MessagingService) { }

  ngOnInit(): void {
  }
  onSubmit(event) {
    this.loading = true;
    console.log(this.email + " eamik")
    if (!this.email || !this.password)
      return;

    this.auth.logIn(this.email, this.password)
      .pipe(first())
      .subscribe(m => {
        if (!m) {
          this.loading = false;
          this.error = " Username or password error";
          return;
        } else {
          console.log(m.id + ' M ID');
          this.auth.getUserMise(m.id)
            .subscribe(mise => {
              this.miseUser = mise;
              localStorage.setItem('miseUser',this.miseUser.toString());
            })
          this.loading = false;
          this.mess.requestPermission();

          this.reloadComponent();
        }

      });
  }
  reloadComponent() {
    /* let currentUrl = this.router.url;
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = 'reload';
     this.router.navigate([currentUrl]);*/
    window.location.reload();

  }
  openSigninDialog() {
    const dialogRef = this.dialog.open(InscriptionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
