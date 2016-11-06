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
///<reference path="../../../node_modules/@types/node/index.d.ts"/>
/* Importamos los modulos que vamos a usar */
var core_1 = require('@angular/core');
/* Importamos nuestro servicio */
var task_service_1 = require('../../services/task.service');
/* Definimos el componente */
var TasksComponent = (function () {
    /* Definimos una instancia del servicio que habiamos creado */
    function TasksComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        /* Hacemos una llamada al methodo declarado en el servicio */
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    /* Funciones de nuestro componente, estamos llamando a los metodos que creamos en el servicio y
       los almacenamos en el scope del componente */
    /* Agregar tarea */
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
        });
    };
    /* Eliminar tarea */
    TasksComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteTasks(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TasksComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            estaHecho: !task.estaHecho
        };
        this.taskService.updateStatus(_task).subscribe(function () {
            task.estaHecho = !task.estaHecho;
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks',
            templateUrl: 'tasks.component.html',
            /* Es importante que en providers declaremos que vamos a usar el servicio que creamos */
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map