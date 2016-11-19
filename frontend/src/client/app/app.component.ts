import { Component } from '@angular/core';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';
import './operators';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor(private ng2cable: Ng2Cable,
            private broadcaster: Broadcaster) {
    this.ng2cable.subscribe('/cable', 'ChatChannel'); // for development need to change url to http://localhost:3000/cable
  }
}
