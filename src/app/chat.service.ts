import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const url = "https://script.google.com/macros/s/AKfycbxFHnzXZn95MraVopLjA5Rfx5JInmuJ105yJpQ4EuyNEvG29tt3/exec"
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages = new BehaviorSubject([])

  constructor(private http:HttpClient) {
    this.http.get(url).subscribe((messages: Object[]) => {
      this.messages.next(messages)
    })
   }


  getMessages(){
    return this.messages
  }

  addMessage(username: string, message: string) {
    let newMessages = this.messages.getValue()
    newMessages.push([username, message])
    this.messages.next(newMessages)
  }
}
