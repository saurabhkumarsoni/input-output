import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  users: any;
  search : string

 getUser(event){
    this.users = event;
  }

  getfilterInputValue(event){
    this.search = event;
  }

}
