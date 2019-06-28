import { Empleado } from './empleado';
import $ from 'jquery';
import { Persona } from './persona';
import { Manejadora } from './manejadora';
import toastr  from 'toastr';

$(document).ready(() => {
    llenarTablaDeEmpleados();
    $("#btnAgregar").click(obtenerDatosParaAgregar);
});

function obtenerDatosParaAgregar() {
    let manejadora: Manejadora = new Manejadora();

    let nombre: any = $("#nombre").val();
    let apellido: any = $("#apellido").val();
    let edad: any = $("#edad").val();
    let legajo: any = $("#legajo").val();
    let turno: any = $("#turno option:selected").val();

    let empleado: Empleado = new Empleado(nombre, apellido, edad, turno, legajo);

    if(!manejadora.agregarEmpleado(empleado))
        toastr.error("El empleado ya existe en la tabla");

    llenarTablaDeEmpleados();
}

function llenarTablaDeEmpleados() {
    $("#empleadosTabla tbody").empty();
    let listadoEmpleados: Array<Empleado> = [];
    let manejadora: Manejadora = new Manejadora();
    listadoEmpleados = JSON.parse(localStorage.getItem(manejadora.nombreEnLocalStorage));

    if(listadoEmpleados != null){
        for (let empleado of listadoEmpleados) {
            $("#empleadosTabla tbody").append(
                `<tr>
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
                    </tr>`
            )
        }
    }

}
