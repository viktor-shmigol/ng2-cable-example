import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { MessageComponent } from './views/index';

import { MessageService } from './services/index';

@NgModule({
  imports: [BrowserModule, HttpModule, routes],
  declarations: [
    AppComponent,
    MessageComponent
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    MessageService
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
