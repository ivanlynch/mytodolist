var express = require('express');
var router = express.Router();

router.get('/tasks', function(request, response, next){
	response.send('TASK API');
});

module.exports = router;