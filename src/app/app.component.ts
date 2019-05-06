import { Component } from '@angular/core';
import { InstagramService } from './instagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = []
  
  constructor(private service: InstagramService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(users => {
      this.users = users as Object[]
    })
  }
}
