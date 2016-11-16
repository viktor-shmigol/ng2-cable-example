import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {
  constructor(private http: Http) {
  }

  query(page:any, perPage:any) {
    return this.http.get(`/api/v1/messages?page=${page}&per_page=${perPage}`).map(res => {
      return res.json();
    });
  }
}
