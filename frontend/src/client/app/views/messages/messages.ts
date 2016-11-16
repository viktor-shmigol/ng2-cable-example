import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'sd-messages',
  templateUrl: 'messages.html'
})

export class MessageComponent implements OnInit {
  public messages: any[] = [];

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.query(1, 10).subscribe(
      (messages) => {
        this.messages = messages;
      }
    );
  }
}
