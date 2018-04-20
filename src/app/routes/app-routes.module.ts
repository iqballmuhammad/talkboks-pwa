import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {NgModule} from '@angular/core';
const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
   {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'prefix'}
  ]
  },
  {path: '', redirectTo: '/main/dashboard', pathMatch: 'prefix'},
  {path: '**', redirectTo: '/main/dashboard', pathMatch: 'prefix'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}
