export class Persona{
   idPersona?: number;
   nombre: string;
   apellido: string;
   titulo: string;
   descripcion: string;
   fotoPerfil: string;
   telefono: string;
   correo: string;
   pass: string;
   fechaNac: string;


   constructor( nombre: string, apellido: string, titulo: string, fotoPerfil: string,  descripcion: string, pass: string, telefono: string, correo: string, fechaNac: string){
    
      this.nombre = nombre;
      this.apellido = apellido;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.fotoPerfil = fotoPerfil;
      this.telefono = telefono;
      this.correo = correo;
      this.pass = pass;
      this.fechaNac = fechaNac;

   }
 
}