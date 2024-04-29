import { Component } from '@angular/core';

// creamos una interfaz para el objeto usuario
interface User{
  nombre: string,
  apellido: string,
  telefono: string,
  nacimiento: Date
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  // inicializamos un usuario llamando a la intefaz creada y una lista de usuarios
  user: User
  userList: User[]

  // llamamos al constructor en el que rellenamos el objeto user y la lista  de usuarios como vacíos 
  constructor(){
    this.user = {
      nombre: '',
      apellido: '',
      telefono: '',
      nacimiento: new Date()
    };

    this.userList = []
  }

  // Creamos una función para que cuando la llamemos, esta cree una copia del usuario registrado y lo guarde en la lista
  handelSubmit(){
    const newUser: User = {... this.user}

    this.userList.push(newUser)
  }

}
