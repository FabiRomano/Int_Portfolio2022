export class Experience{
    idExp?:any;
    empresaExp: string;
    fechaInicioExp:string;
    fechaFinExp: string;
    descripcionExp: string;


    constructor(empresaExp:string, fechaInicioExp:string, fechaFinExp:string, descripcionExp:string) {

        this.empresaExp = empresaExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;
        this.descripcionExp = descripcionExp;
    }
   
}