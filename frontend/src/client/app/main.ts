import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

if (String('<%= ENV %>') === 'prod') { enableProdMode(); }

platformBrowserDynamic().bootstrapModule(AppModule/*, options*/);
