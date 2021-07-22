import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Parieur } from 'src/app/shared/models/parieur.model';
import { ModifInfosComponent } from '../modifInfos/modif-infos/modif-infos.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  loading: boolean = true;
  user: Parieur = new Parieur();
  user2: Parieur = new Parieur();
  mise:string;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value = null;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null) {
     
      console.log(localStorage.getItem('currentUser') + " GGGGGGGGGGGGGGG");
      this.loading = false;
      this.user.id = localStorage.getItem('currentUser');
      this.user.jetons = Number.parseInt(localStorage.getItem('jetons'));
      this.user.mail = localStorage.getItem('mail');
      this.user.prenom = localStorage.getItem('prenom');
      this.user.nom = localStorage.getItem('username');
      this.user2=JSON.parse(localStorage.getItem('user'));
      this.mise=localStorage.getItem('miseTotale');
      this.value=this.user.id+"|"+this.user.jetons+"|"+this.user.mail+"|"+this.user.prenom+"|"+this.user.nom;
    } else {
      this.reloadComponent();
    }
  }
  reloadComponent() {
    console.log(localStorage.getItem('jetons') + " jetons");
    this.router.navigate(["/"]);
    /* 
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = 'reload';*/
    //
  }
  openLoginDialog() {
    const dialogRef = this.dialog.open(ModifInfosComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
