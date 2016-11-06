/* Importamos los modulos de Angular 2 que vamos a usar */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
	/* Creamos una instancia del servicio */
	constructor(private http:Http){

	}
	
	/* Hacemos la llamada a la API desde nuestro servicio */
	getTasks(){
		return this.http.get('http://localhost:3000/api/tasks')
			.map(response => response.json());
	}

    /* Declaramos la funcion que nos va a agregar una nueva tarea*/
	addTask(newTask){
        /* Seateamos la cabecera de la peticion */
		var headers = new Headers();
		headers.append('Content-type', 'application/json');
        /* Hacemos la peticion a nuestra api  y le mandamos los valores en JSON */
		return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), {headers: headers})
			.map(response => response.json());
	}

	deleteTasks(id){
		return this.http.delete('/api/task/'+id)
			.map(response => response.json());
	}

	updateStatus(_task){
		var headers = new Headers();
		headers.append('Content-type', 'application/json');
		return this.http.put('/api/task/'+_task._id, JSON.stringify(_task), {headers: headers})
			.map(response => response.json());
	}

}