export class Education{
    idEdu?:number;
    establecimientoEdu: string;
    fechaInicioEdu:string;
    fechaFinEdu: string;
    certificadoEdu: string;
    img: string;

    constructor(establecimientoEdu:string, fechaInicioEdu:string, fechaFinEdu:string, certificadoEdu:string, img:string) {
       this.establecimientoEdu = establecimientoEdu;
       this.fechaInicioEdu = fechaInicioEdu;
       this.fechaFinEdu = fechaFinEdu;
       this.certificadoEdu = certificadoEdu;
       this.img= img;
    }
}