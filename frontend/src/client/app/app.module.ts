import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { MessageComponent } from './views/index';
import { MessageService } from './services/index';
import { NavbarComponent } from './components/index';

@NgModule({
  imports: [BrowserModule, HttpModule, routes, FormsModule, InfiniteScrollModule],
  declarations: [
    AppComponent,
    MessageComponent,
    NavbarComponent
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    MessageService,
    Ng2Cable,
    Broadcaster
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
