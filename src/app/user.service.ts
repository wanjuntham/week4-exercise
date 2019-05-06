import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name = new BehaviorSubject("John")
  age = 27
  isStudent = false
  tasks = ["Buy Groceries", "Do Homework"]
  company = {
    name: "Dell"
  }

  constructor() { }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }

  getIsStudent() {
    return this.isStudent
  }

  getTasks() {
    return this.tasks
  }

  getCompany() {
    return this.company
  }

  change() {
    this.name.next("Jane")
    this.age = 18
    this.isStudent = !this.isStudent
    this.tasks = ["Do Nothing"]
    this.company = {name: "Microsoft"}
  }
}
