import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { SHARE_BUTTONS_CONFIG } from '../../../ngx-sharebuttons/src/public-api';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';

import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocsService } from './docs/docs.service';
import { ShareIconsModule } from '../../../ngx-sharebuttons/icons/src/share-icons.module';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule,
    NgProgressModule,
    NgProgressRouterModule,
    SharedModule,
    ShareIconsModule.forRoot()
  ],
  providers: [
    DocsService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    },
    {
      provide: SHARE_BUTTONS_CONFIG,
      useValue: {
        twitterAccount: 'MurhafSousli',
        theme: 'material-dark',
        debug: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faLightbulb, faBook, faCoffee, faInfo);
  }
}
