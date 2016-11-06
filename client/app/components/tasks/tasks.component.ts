///<reference path="../../../node_modules/@types/node/index.d.ts"/>
/* Importamos los modulos que vamos a usar */
import { Component } from '@angular/core';
/* Importamos nuestro servicio */
import { TaskService } from '../../services/task.service';
/* Importamos el model */
import { Task } from '../../../Task';

/* Definimos el componente */
@Component({
  
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  /* Es importante que en providers declaremos que vamos a usar el servicio que creamos */
  providers: [TaskService]
  
})

export class TasksComponent { 

	/* tasks es un objeto del tipo Task[] */
	tasks: Task[];
	title: string;

	/* Definimos una instancia del servicio que habiamos creado */
	constructor(private taskService:TaskService){
		/* Hacemos una llamada al methodo declarado en el servicio */
		this.taskService.getTasks()
			.subscribe(tasks => {
				this.tasks = tasks;
			});
	}
	/* Funciones de nuestro componente, estamos llamando a los metodos que creamos en el servicio y
	   los almacenamos en el scope del componente */

	/* Agregar tarea */
	addTask(event){

		event.preventDefault();
		
		var newTask = {
			title: this.title,
			isDone: false
		};

		this.taskService.addTask(newTask)
			.subscribe(task => {
				this.tasks.push(task);
				this.title = '';
			});
	}

	/* Eliminar tarea */
	deleteTask(id){
		var tasks = this.tasks;

		this.taskService.deleteTasks(id).subscribe(data => {
			if(data.n == 1){
				for(var i = 0; i < tasks.length ; i++){
					if(tasks[i]._id == id){
						tasks.splice(i, 1);
					}
				}
			}
		})
	}

	updateStatus(task){
		var _task = {
			_id: task._id,
			title: task.title,
			estaHecho: !task.estaHecho
		};

		this.taskService.updateStatus(_task).subscribe(() => {
			task.estaHecho = !task.estaHecho;
		});
	}

}