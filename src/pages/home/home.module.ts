import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {IonicRatingModule, RatingComponent} from 'ionic4-rating/dist';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    IonicRatingModule,
    IonBottomDrawerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers: [
    Geolocation,
    HttpClientModule
  ]
})
export class HomePageModule {}
