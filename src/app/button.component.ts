import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-button',
  template: `<button (click)="fetchAllUser()">Show users</button>`,
})
export class ButtonComponent {
@Output() data = new EventEmitter()
  userList: any = [];

  constructor(private userService: UserService){}


  fetchAllUser(){
    this.userService.getAllUser().subscribe((response) =>{
      if(response){
      this.userList = response;
        this.data.emit(this.userList)
      }
    })
    
  }
}
