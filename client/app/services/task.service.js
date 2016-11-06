"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Importamos los modulos de Angular 2 que vamos a usar */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var TaskService = (function () {
    /* Creamos una instancia del servicio */
    function TaskService(http) {
        this.http = http;
    }
    /* Hacemos la llamada a la API desde nuestro servicio */
    TaskService.prototype.getTasks = function () {
        return this.http.get('http://localhost:3000/api/tasks')
            .map(function (response) { return response.json(); });
    };
    /* Declaramos la funcion que nos va a agregar una nueva tarea*/
    TaskService.prototype.addTask = function (newTask) {
        /* Seateamos la cabecera de la peticion */
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        /* Hacemos la peticion a nuestra api  y le mandamos los valores en JSON */
        return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    TaskService.prototype.deleteTasks = function (id) {
        return this.http.delete('/api/task/' + id)
            .map(function (response) { return response.json(); });
    };
    TaskService.prototype.updateStatus = function (_task) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        return this.http.put('/api/task/' + _task._id, JSON.stringify(_task), { headers: headers })
            .map(function (response) { return response.json(); });
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map