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
    this.userService.getAge().subscribe(age => {
      this.age = age
    })
    this.userService.getIsStudent().subscribe(isStudent => {
      this.isStudent = isStudent
    })
    this.userService.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
    this.company = this.userService.getCompany().subscribe(company => {
      this.company = company
    })
  }

  onClick() {
    this.userService.change()
  }

}

