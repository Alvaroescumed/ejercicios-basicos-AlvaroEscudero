import { Component } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {

  //creamos las variables, un array con todos los elementos de la lista y uno para el input
  elements: string[] = [];
  newElement: string = '';
  
  addElement(){
    if(this.newElement.trim() !== ''){
      this.elements.push(this.newElement);
      this.newElement='';
      console.log(this.elements);
    }
  }
  
  deleteElement(i: number){
    this.elements.splice(i,1);
  }
}
