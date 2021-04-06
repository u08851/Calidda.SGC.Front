import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'manager',
        pathMatch: 'full',
      },
      {
        path: 'manager', 
        loadChildren: () => import('./../views/Manager/manager.module').then((m) => m.ManagerModule),
      } 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
