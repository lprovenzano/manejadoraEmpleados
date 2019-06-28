"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_1 = require("./empleado");
const jquery_1 = __importDefault(require("jquery"));
const manejadora_1 = require("./manejadora");
const toastr_1 = __importDefault(require("toastr"));
jquery_1.default(document).ready(() => {
    llenarTablaDeEmpleados();
    jquery_1.default("#btnAgregar").click(obtenerDatosParaAgregar);
});
function obtenerDatosParaAgregar() {
    let manejadora = new manejadora_1.Manejadora();
    let nombre = jquery_1.default("#nombre").val();
    let apellido = jquery_1.default("#apellido").val();
    let edad = jquery_1.default("#edad").val();
    let legajo = jquery_1.default("#legajo").val();
    let turno = jquery_1.default("#turno option:selected").val();
    let empleado = new empleado_1.Empleado(nombre, apellido, edad, turno, legajo);
    if (!manejadora.agregarEmpleado(empleado))
        toastr_1.default.error("El empleado ya existe en la tabla");
    llenarTablaDeEmpleados();
}
function llenarTablaDeEmpleados() {
    jquery_1.default("#empleadosTabla tbody").empty();
    let listadoEmpleados = [];
    let manejadora = new manejadora_1.Manejadora();
    listadoEmpleados = JSON.parse(localStorage.getItem(manejadora.nombreEnLocalStorage));
    if (listadoEmpleados != null) {
        for (let empleado of listadoEmpleados) {
            jquery_1.default("#empleadosTabla tbody").append(`<tr>
                        <td>${empleado.nombre}</td>
                        <td>${empleado.apellido}</td>
                        <td>${empleado.edad}</td>
                        <td>${empleado.legajo}</td>
                        <td>${empleado.horario}</td>
                        <td>
                            <a href="#" onclick=modificarEmpleado(${empleado.legajo})>
                                <i class="fas fa-user-edit"></i>
                            </a> 
                            | 
                            <a href="#" onclick=eliminarEmpleado(${empleado.legajo})>
                                <i class="far fa-trash-alt"></i>
                            </a>
                        </td>
                    </tr>`);
        }
    }
}
