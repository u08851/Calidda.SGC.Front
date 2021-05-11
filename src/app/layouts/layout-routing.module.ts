import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      { path: '', redirectTo: 'manager', pathMatch: 'full' },
      {
        path: 'manager',
        loadChildren: () => import('./../views/Manager/manager.module').then((m) => m.ManagerModule)
      },
      {
        path: 'secretary',
        loadChildren: () => import('./../views/secretary/secretary.module').then((m) => m.SecretaryModule)
      },
      {
        path: 'member',
        loadChildren: () => import('./../views/member/member.module').then((m) => m.MemberModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
