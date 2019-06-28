import {Empleado} from './empleado';
export interface IManejadora{
    agregarEmpleado(empleado:Empleado):boolean;
    limpiarFormulario():void;
    mostrarEmpleados():void;
    modificarEmpleado(indice:number):void;
    eliminarEmpleado(indice:number):void;
    filtrarPorHora():void;
    promedioEdadPorHora():void;
}