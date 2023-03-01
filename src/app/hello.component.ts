import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FilterComponent } from './filter.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-hello',
  template: `
 
 
  <div class="container"> Value from user dropdown using sunject {{dropdownValue}}</div>
  <div id="app" class="container">
  <div class="user-list">
  <div class="user-item" *ngFor="let user of users | filter: search">
  <div class="user-item-card">
    <div class="user-item-media">
      <div class="media-top">
        <img
          src="{{user.avatar_url}}"
          alt="Image"
        />
      </div>
      <div class="media-name">
        <p>{{user.login}}</p>
      </div>
    </div>
    <div class="content">
      <label>Business Card</label>
      <span>
        Username:<span class="content-title">{{user.login}} </span>
      </span>
      <span
        >Email:
        <span class="content-title"
          >olai.monteiro@example.com</span
        ></span
      >
      <span>City: <span class="content-title">Santos</span></span>
    </div>
  </div>
</div>
  </div>
  </div>

  
  
  `,
 
})
export class HelloComponent implements OnInit {
 
  @Input() users: any;
  @Input() search: string;
  dropdownValue: any;

  constructor(private userService: UserService){}


  ngOnInit(){
    this.userService.selectedObject.subscribe((res) =>{
      this.dropdownValue = res;
    })
  }
}
