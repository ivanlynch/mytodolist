/* Declaramos express y creamos el router*/ 
var express = require('express');
var router = express.Router();

/* Le decimos al router: Hey!, si alguien quiere conocer las tareas envialo a la API */
router.get('/tasks', function(request, response, next){
	response.send('TASK API');
});

/* Exportamos el modulo */
module.exports = router;