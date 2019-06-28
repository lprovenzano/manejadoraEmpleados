"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manejadora {
    constructor() {
        this.nombreEnLocalStorage = "personas";
    }
    agregarEmpleado(empleado) {
        this.lista = this.llenarLista();
        let existeEnTabla = this.lista.find(x => x.legajo == empleado.legajo);
        if (existeEnTabla == undefined)
            this.lista.push(empleado);
        else {
            localStorage.setItem(this.nombreEnLocalStorage, JSON.stringify(this.lista));
            return false;
        }
        localStorage.setItem(this.nombreEnLocalStorage, JSON.stringify(this.lista));
        return true;
    }
    limpiarFormulario() {
        throw new Error("Method not implemented.");
    }
    mostrarEmpleados() {
        throw new Error("Method not implemented.");
    }
    modificarEmpleado(indice) {
        throw new Error("Method not implemented.");
    }
    eliminarEmpleado(indice) {
        throw new Error("Method not implemented.");
    }
    filtrarPorHora() {
        throw new Error("Method not implemented.");
    }
    promedioEdadPorHora() {
        throw new Error("Method not implemented.");
    }
    llenarLista() {
        let lista = localStorage.getItem(this.nombreEnLocalStorage) == null ? new Array() : JSON.parse(localStorage.getItem(this.nombreEnLocalStorage));
        localStorage.clear();
        return lista;
    }
}
exports.Manejadora = Manejadora;
