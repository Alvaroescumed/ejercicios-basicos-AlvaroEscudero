import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  //inicializamos la variable que usaremos como contador 
  count: number = 0;

  // función para incrementar el contador
  increaseCount(){
    this.count++;
  }

  // funcion para disminuir el contador
  decreaseCount(){

    //comprobamos que si es 0 este no siga disminuyendio
    if( this.count > 0){
      this.count--;
    } else{
      return
    }

  }

  // funcion para reestablecer el contador  a 0
  resetCount(){
    this.count = 0;
  }
}
