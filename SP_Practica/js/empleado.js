"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
class Empleado extends persona_1.Persona {
    /**
     *
     */
    constructor(nombre, apellido, edad, horario, legajo) {
        super(nombre, apellido, edad);
        this.horario = horario;
        this.legajo = legajo;
    }
}
exports.Empleado = Empleado;
