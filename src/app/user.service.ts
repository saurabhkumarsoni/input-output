import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  selectedObject = new Subject();

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get('https://api.github.com/users');
  }

}