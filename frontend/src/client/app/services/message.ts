import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {
  constructor(private http: Http) {
  }

  query(page:any) {
    return this.http.get(`/api/v1/messages?page=${page}`).map(res => {
      return res.json();
    });
  }

  create(message:any) {
    return this.http.post('/api/v1/messages', message).map(res => {
      return res.json();
    });
  }
}
