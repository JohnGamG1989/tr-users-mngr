export interface IUserAddRequest {
    nombre: string;
    apellido: string;
    tipoDocumento: number;
    numeroDocumento: string;
    telefonoFijo: string;
    telefonoCelular: string;
    correo: string;
    ciudad: number;
    fechaNacimiento: Date;
    tipoPersona: number;
    uid: number;
}

