import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-dropdown',
  template: `Select value : <select (change)="handleChange($event)"
  name="cmbTipoTexto"
  class="form-control form-control-sm col-sm-7" 
  id="cmbTipoTexto" [disabled]="!users"
  >
  <option *ngFor="let item of textTypes" 
          [value]="item.id">{{item.value}}</option>
</select>`,
})
export class UserDropDownComponent  {
  constructor(private userService: UserService){}

  @Input() users: any;
  name = 'Angular';
  selectedObject;
  textTypes = [
    { id : '5' , value : 'saurabh' },
    { id : '1' , value : 'suman' },
    { id : '2' , value : 'sonali' },
    { id : '3' , value : 'surabhi' },
    { id : '4' , value : 'sandhya' },

  ]

  handleChange(event) {
    this.selectedObject = this.textTypes[event.target.value];    
    this.userService.selectedObject.next(this.selectedObject);
  }
}
