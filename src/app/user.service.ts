import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name = new BehaviorSubject("John")
  age = new BehaviorSubject(27)
  isStudent = new BehaviorSubject(false)
  tasks = new BehaviorSubject(["Buy Groceries", "Do Homework"])
  company = new BehaviorSubject({
    name: "Dell"
  })

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
    this.age.next(18)
    this.isStudent.next(!this.isStudent)
    this.tasks.next(["Do Nothing"])
    this.company.next({name: "Microsoft"})
  }
}
