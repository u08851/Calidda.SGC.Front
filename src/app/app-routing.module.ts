import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolComponent } from './auth/rol/rol.component';

const routes: Routes = [
  { path: '', redirectTo: 'rol', pathMatch: 'full' },
  { path: 'rol', component: RolComponent },
  {
    path: '',
    loadChildren: () => import('./layouts/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
