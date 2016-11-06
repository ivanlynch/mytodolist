/* Declaramos express y creamos el router*/ 
var express = require('express');
var router = express.Router();

/* Le decimos al router: Hey!, si alguien quiere entrar al root envialo a index.html */
router.get('/', function(request, response, next){
	response.render('index.html');
});

/* Exportamos el modulo */
module.exports = router;