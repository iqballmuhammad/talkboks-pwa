import {Component, HostBinding} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

declare let ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class.loading') loading = true;

  constructor(mdIconRegistry: MatIconRegistry, public router: Router) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
    this.loading = false;
  }

}
