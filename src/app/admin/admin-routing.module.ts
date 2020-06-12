import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LinkOneComponent } from './link-one/link-one.component';
import { LinkTwoComponent } from './link-two/link-two.component';
import { LinkThreeComponent } from './link-three/link-three.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'link1', component: LinkOneComponent },
      { path: 'link2', component: LinkTwoComponent },
      { path: 'link3', component: LinkThreeComponent },
      { path: '', redirectTo: 'link1', pathMatch: 'prefix' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
