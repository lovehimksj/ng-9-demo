import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { LinkOneComponent } from './link-one/link-one.component';
import { LinkTwoComponent } from './link-two/link-two.component';
import { LinkThreeComponent } from './link-three/link-three.component';
@NgModule({
  declarations: [AdminComponent, LinkOneComponent, LinkTwoComponent, LinkThreeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule
  ]
})
export class AdminModule { }
