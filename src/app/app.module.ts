import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyListComponent } from './my-list/my-list.component';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './contador/contador.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    ContadorComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
