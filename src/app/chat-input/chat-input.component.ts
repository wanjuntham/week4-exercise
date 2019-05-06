import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ChatService } from '../chat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  profile = new FormGroup({

    email : new FormControl('',[Validators.required]),
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })
  
  date = new FormControl('')

  constructor(private chat: ChatService, private http:HttpClient) {}

  ngOnInit() {}

  onClick() {
    // this.message.setValue('Nancy')
    if (this.profile.valid){
    this.chat.addMessage(this.profile.controls.message.value,this.profile.controls.username.value)
    }
    else console.log("error")
  }

  onSubmit() {
    this.http.post(
        'https://insta.nextacademy.com/api/v1/users/',
        this.profile.value
      )
      .subscribe(response => {
        console.log(response)
      })
    
  }
}
