import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
const url = 'https://insta.nextacademy.com/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  users = new BehaviorSubject([])

  constructor(private http: HttpClient) {
    // the first time InstagramService is used, request for users
    this.http.get(url).subscribe((users: Object[]) => {
      this.users.next(users)
    })
  }

  // getUsers could be triggered by multiple components multiple times
  getUsers() {
    // if i haven't requested for users before
    if (this.users.getValue().length === 0) {

      // make the http GET request
      this.http.get(url).subscribe((users: any) => {
        this.users.next(users)
      })
    }
    
    return this.users
  }
}
