import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Broadcaster } from 'ng2-cable/js/index';
import { MessageService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'sd-messages',
  templateUrl: './messages.html',
  styleUrls: ['./messages.css']
})

export class MessageComponent implements OnInit {
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  public messages: any[] = [];
  public page: number = 1;
  public currentSender: any;
  public message: any = {};

  constructor(private messageService: MessageService,
              private broadcaster: Broadcaster) {
  }

  ngOnInit() {
    this.checkUser();
    this.loadMessages();
    this.initEvents();
  }

  loadMessages() {
    this.messageService.query(this.page).subscribe(
      (messages) => {
        this.messages = messages.reverse().concat(this.messages);
      }
    );
  }


  createMessage() {
    this.message['sender'] = this.currentSender;
    this.messageService.create({message: this.message}).subscribe(
      ()=> {
        this.message = {};
        this.scrollToBottom();
      }
    );
  }

  checkUser() {
    if (this.getCurrentSender()) {
      this.currentSender = this.getCurrentSender();
    } else {
      this.currentSender = prompt('Please enter your nickname', 'Active user');
      if (this.currentSender) {
        localStorage.setItem('currentSender', this.currentSender);
      }
    }
  }

  getCurrentSender() {
    return localStorage.getItem('currentSender');
  }

  nextPage() {
    this.page += 1;
    this.loadMessages();
  }

  initEvents() {
    this.broadcaster.on<string>('CreateMessage').subscribe(
      message => {
        this.messages.push(message);
        this.scrollToBottom();
      }
    );
  }

  scrollToBottom() {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }
}
