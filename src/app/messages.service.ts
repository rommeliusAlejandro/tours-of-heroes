import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  addMessage(message): void {
    if ( -1 === this.messages.indexOf(message) ) {
      this.messages.push(message);
    }
  }

  clear(): void {
    this.messages = [];
  }

  constructor() { }
}
