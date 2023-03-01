import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `<input type="text" placeholder="filter users by username"  [(ngModel)]="searchTerm"  (keyup)="onKey($event)" [disabled]="!users"/>
  `,
})
export class FilterComponent {

 

  @Input() users: any


searchTerm: string;

@Output() filterInput = new EventEmitter();


onKey(event){
  this.filterInput.emit(event.target.value)
  
}





  
}

