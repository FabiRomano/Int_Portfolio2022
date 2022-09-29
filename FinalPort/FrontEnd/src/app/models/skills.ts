export class Skills{
    idSki?: any;
    nombreSkills: string;
    fotoSkills: string;
    porcentajeSkills: number;

    constructor(nombreSkills: string, fotoSkills: string,porcentajeSkills: number){

        this.nombreSkills = nombreSkills;
        this.fotoSkills = fotoSkills;
        this.porcentajeSkills =porcentajeSkills;
    }

}