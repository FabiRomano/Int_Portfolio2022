export class Skills{
    idSkills?: any;
    nombreSkills: string;
    porcentajeSkills: any;
    fotoSkills: string;

    constructor(nombreSkills: string, fotoSkills: string,porcentajeSkills: any){

        this.nombreSkills = nombreSkills;
        this.porcentajeSkills =porcentajeSkills;
        this.fotoSkills = fotoSkills;
       
    }

}