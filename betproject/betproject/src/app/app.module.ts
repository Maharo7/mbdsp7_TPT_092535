import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Routes, RouterModule, Router } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { CouponsComponent } from './coupons/coupons/coupons.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FichematchComponent } from './ficheMatch/fichematch/fichematch.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HistoriqueComponent } from './historique/historique/historique.component';
import {MatTableModule} from '@angular/material/table';
import { CalendrierComponent } from './calendrier/calendrier/calendrier.component';
import { HistoriqueRechercheComponent } from './historique-recherche/historique-recherche/historique-recherche.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddcouponComponent } from './addcoupon/addcoupon/addcoupon.component';
import { MesparisComponent } from './mesParis/mesparis/mesparis.component';
import { TopparisComponent } from './top50/topparis/topparis.component';
import { ListematchsComponent } from './listematchs/listematchs/listematchs.component';
import { ProfilComponent } from './profil/profil/profil.component';
import { Keepalive, NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarokComponent } from './coupons/snackbarok/snackbarok.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: AccueilComponent,
  },
  {
    path: "detailmatch/:id",
    component: FichematchComponent,
  },
  {
    path: "historiqueequipe/:id",
    component: HistoriqueComponent,
  },
  {
    path:"historiqueGlobal",
    component:HistoriqueRechercheComponent
  },
  {
    path:"calendrier",
    component:CalendrierComponent,
  },
  {
    path:"calendrier/:date",
    component:CalendrierComponent,
  },
   {
    path:"mesparis",
    component:MesparisComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"top50",
    component:TopparisComponent,
  },
  {
    path:"profil",
    component:ProfilComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CouponsComponent,
    LoginComponent,
    InscriptionComponent,
    FichematchComponent,
    HistoriqueComponent,
    CalendrierComponent,
    HistoriqueRechercheComponent,
    AddcouponComponent,
    MesparisComponent,
    TopparisComponent,
    ListematchsComponent,
    ProfilComponent,
    SnackbarokComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,ModalModule,
    MatGridListModule,
    MatFormFieldModule,MomentModule,
    MatInputModule,NgIdleKeepaliveModule,
    MatButtonModule,MatProgressBarModule,MatSnackBarModule,
    MatSidenavModule, MatProgressSpinnerModule,
    RouterModule.forRoot(routes),  NgIdleKeepaliveModule.forRoot(),
    MatListModule,MatDatepickerModule,HttpClientModule,MatTableModule,
    MatCardModule,MatDialogModule,FormsModule,MatCheckboxModule,MatNativeDateModule
    
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' } ,
    DatePipe,MatNativeDateModule,Keepalive,BsModalService,ComponentLoaderFactory,
    PositioningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
