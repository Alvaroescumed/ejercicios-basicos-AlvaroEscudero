import { Component } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {

  //creamos las variables, el elemento que vamos a añadir y el array que guardara todos estos
  elements: string[] = []
  newElement: string = ''
  
  //creamos la funcion que añade el elemento introducido en el input de la web al array
  addElement(){
      this.elements.push(this.newElement)
      this.newElement=''
  }
  
  //funcion para eliminar un elemento individual de la lista
  deleteElement(i: number){
    this.elements.splice(i,1)
  }
}
