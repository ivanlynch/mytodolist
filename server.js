/* Definimos los modulos que vamos a usar */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

/* Definimos las rutas que vamos a usar (Index para el main y Tasks para la API ) */
var index = require('./routes/index');
var tasks = require('./routes/tasks');

/* Puerto en el escucha el servidor */
var port = 3000;

/* Creamos nuestra aplicacion con express */
var app = express();

/* Seteamos el view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/* Seteamos la carpeta Cliente */
app.use(express.static(path.join(__dirname, 'client')));

/* Configuramos el body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* Esta seria nuestra pagina principal y la API */
app.use('/', index);
app.use('/api', tasks);

/* Configuramos el servidor */
app.listen(port, function(){
	console.log('El servidor esta corriendo en el puerto ' + port);
});
