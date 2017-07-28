import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListRoutingModule } from './hero-list-routing.module';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  imports: [
    CommonModule,
    HeroListRoutingModule
  ],
  declarations: [HeroListComponent]
})
export class HeroListModule { }
