/* Declaramos los modulos que vamos a usar en el router*/ 
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

/* Declamos nuestra Base de Datos */
var db = mongojs('mongodb://localhost:27017/tasks', ['tasks']);

/* GET METHOD, Le decimos al router: Hey!, si alguien quiere conocer las tareas envialo a la API */
router.get('/tasks', function(request, response, next){

	/* Hacemos la query como en Mongo pero le pasamos una funcion como parametro */
	db.tasks.find(function(error, tasks){
		if(error){
			response.send(error);
		}
		/* Si encuentra algo, mandamelo como JSON */
		response.json(tasks);
	});

});

/* GET METHOD BY ID */
router.get('/task/:id', function(request, response, next){

/*  Buscamos por Id  -  le pasamos el objeto que viene en los parametros de la peticion */
	db.tasks.findOne({_id: mongojs.ObjectId(request.params.id)}, function(error, task){

		if(error){
			response.send(error);
		}
		response.json(task);
	});

});

/* POST METHOD */
router.post('/task', function(request, response, next){

	var task = request.body;

	if(!task.title || !(task.estaHecho + '')){

		response.status(400);
		response.json({
			"Error" : "No hay información"
		});

	}else{

		db.tasks.save(task, function(error, task){

			if(error){

				response.send(error);
			}
				response.json(task);
		});
	}
});


/* DELETE METHOD! */
router.delete('/task/:id', function(request, response, next){

	db.tasks.remove({_id: mongojs.ObjectId(request.params.id)}, function(error, task){

		if(error){

			response.send(error);
		}

		response.json(task);
	});
});


/* UPDATE METHOD */
router.put('/task/:id', function(request, response, next){

	var task = request.body;
	var updTask = {};

	if(task.estaHecho){
		updTask.estaHecho = task.estaHecho;
	}

	if(task.title){
		updTask.title = task.title;
	}

	if(!updTask){

		response.status(400);
		response.json({
			"Error" : "No hay información"
		});

	}else{

		db.tasks.update({_id: mongojs.ObjectId(request.params.id)}, updTask, {}, function(error, task){

			if(error){
				response.send(error);
			}
			response.json(task);

		});

	}

});

/* Exportamos el modulo */
module.exports = router;