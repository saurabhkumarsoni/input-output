import { Component } from '@angular/core';

@Component({
  selector: 'my-app-user-dropdown',
  template: `Select value : <select (change)="handleChange($event.target.selectedIndex)"
  name="cmbTipoTexto"
  class="form-control form-control-sm col-sm-7" 
  id="cmbTipoTexto"
  >
  <option *ngFor="let item of textTypes" 
          [value]="item.id">{{item.value}}</option>
</select>`,
})
export class UserDropDownComponent  {
  name = 'Angular';
  selectedObject;
  textTypes = [
    { id : '5' , value : 'saurabh' },
    { id : '1' , value : 'suman' },
    { id : '2' , value : 'sonali' },
    { id : '3' , value : 'surabhi' },
    { id : '4' , value : 'sandhya' },

  ]

  handleChange(index) {
    console.log(this.textTypes[index]);
    this.selectedObject = this.textTypes[index];
  }
}
