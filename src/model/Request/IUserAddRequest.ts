export interface IUserAddRequest {
    nombre: string;
    apellido: string;
    tipoDocumento: number;
    numeroDocumento: string;
    telefonoFijo: string;
    telefonoCelular: number;
    correo: string;
    ciudad: number;
    fechaNacimiento: Date;
    tipoPersona: number;
    uid: number;
}

