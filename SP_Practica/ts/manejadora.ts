import { IManejadora } from './imanejadora';
import {Empleado} from './empleado';
import { Persona } from './persona';

import {toastr} from '../node_modules/toastr';

export class Manejadora implements IManejadora{
    lista:Array<Empleado>;
    nombreEnLocalStorage:string = "personas";

    agregarEmpleado(empleado:Empleado ): boolean {
        this.lista = this.llenarLista();

        let existeEnTabla = this.lista.find(x => x.legajo == empleado.legajo);

        if(existeEnTabla==undefined)
            this.lista.push(empleado)
        else{
            localStorage.setItem(this.nombreEnLocalStorage, JSON.stringify(this.lista));
            return false;
        }
            

        localStorage.setItem(this.nombreEnLocalStorage, JSON.stringify(this.lista));
        return true;
    }    
    
    limpiarFormulario(): void {
        throw new Error("Method not implemented.");
    }
    mostrarEmpleados(): void {
        throw new Error("Method not implemented.");
    }
    modificarEmpleado(indice: number): void {
        throw new Error("Method not implemented.");
    }
    eliminarEmpleado(indice: number): void {
        throw new Error("Method not implemented.");
    }
    filtrarPorHora(): void {
        throw new Error("Method not implemented.");
    }
    promedioEdadPorHora(): Array<Persona> {
        throw new Error("Method not implemented.");
    }

    private llenarLista():Array<Empleado>{
        let lista = localStorage.getItem(this.nombreEnLocalStorage)==null? new Array<Persona>() : JSON.parse(localStorage.getItem(this.nombreEnLocalStorage));
        localStorage.clear();
        return lista;
    }

}