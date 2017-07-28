import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailRoutingModule
  ],
  declarations: [HeroDetailComponent]
})
export class HeroDetailModule { }
