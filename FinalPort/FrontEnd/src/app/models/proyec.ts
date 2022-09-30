export class Proyec{
    idProyec?: any;
    nombreProyectos: string;
    inicioProyectos:string;
    finProyectos: string;
    descripcionProyectos:string;
    urlProyectos:string;

    constructor(nombreProyectos:string, inicioProyectos:string, finProyectos:string, descripcionProyectos:string, urlProyectos:string) {

        this.nombreProyectos = nombreProyectos;
        this.inicioProyectos = inicioProyectos;
        this.finProyectos = finProyectos;
        this.descripcionProyectos = descripcionProyectos;
        this.urlProyectos = urlProyectos;
    }


}