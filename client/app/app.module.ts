import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Importamos el modulo http para poder usar peticiones http desde nuestro componente */
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({

  /* En imports hay que declarar tambien el modulo importado
  para que cuando exportemos la clase podamos usarlo de lo contrario
   vamos a recibir un error del navegador */	
  imports:      [ BrowserModule, HttpModule , FormsModule],
  declarations: [ AppComponent, TasksComponent ],
  bootstrap:    [ AppComponent, TasksComponent ]

})

export class AppModule { }
