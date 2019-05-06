import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  gender = new BehaviorSubject("male")
  name = new BehaviorSubject("John")
  age = new BehaviorSubject(27)
  isStudent = new BehaviorSubject(false)
  tasks = new BehaviorSubject(["Buy Groceries", "Do Homework"])
  company = new BehaviorSubject({
    name: "Dell"
  })
  schools = new BehaviorSubject(["Catholic High", "University of Malaysia"])
  dateOfBirth = new BehaviorSubject({
    year: 1990,
    month: 8,
    day: 20,
  })

  constructor() { }

  getGender() {
    return this.gender
  }
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

  getSchools() {
    return this.schools
  }

  getDOB() {
    return this.dateOfBirth
  }

  change() {
    this.gender.next("Female")
    this.name.next("Jane")
    this.age.next(18)
    this.isStudent.next(true)
    // how to change array
    let newTasks = this.tasks.getValue()
    newTasks.push('Do Nothing')
    this.tasks.next(newTasks)

    // how to change object
    let newCompany = this.company.getValue()
    newCompany.name = 'Microsoft'
    this.company.next(newCompany)

    let newSchool = this.schools.getValue()
    newSchool.push('INTI University')
    this.schools.next(newSchool)

    let newDOB = this.dateOfBirth.getValue()
    newDOB.day = 1
    newDOB.month = 2
    newDOB.year = 2000
    this.dateOfBirth.next(newDOB)
  }
}
