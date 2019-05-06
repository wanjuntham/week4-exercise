import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages = []

  constructor(private service: ChatService) {}

  ngOnInit() {
    this.service.getMessages().subscribe(messages => {
      this.messages = messages
    })
  }
}
