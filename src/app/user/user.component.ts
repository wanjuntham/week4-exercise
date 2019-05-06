import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string
  age: number
  isStudent: boolean
  tasks:string[] = []
  company = {}

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getName().subscribe(name => {
      this.name = name
    })
    this.age = this.userService.getAge()
    this.isStudent = this.userService.getIsStudent()
    this.tasks = this.userService.getTasks()
    this.company = this.userService.getCompany()
  }

  onClick() {
    this.userService.change()
  }

}
