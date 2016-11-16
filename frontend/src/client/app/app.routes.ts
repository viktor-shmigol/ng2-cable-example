import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './views/index';

const routing: Routes = [
  {path: '', component: MessageComponent}
];

export const routes = RouterModule.forRoot(routing);
