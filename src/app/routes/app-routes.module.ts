import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {NgModule} from '@angular/core';
const APP_ROUTES: Routes = [
  {
    path: '', component: MainPageComponent, children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}
