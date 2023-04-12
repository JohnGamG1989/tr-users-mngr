export interface IUserResponse {
        idUsuario:number;
        nombre:string;
        Apellido:string;
        telFijo:string;
        telCelular:string;
        correo:string;
        fechaNacimiento:Date;
        idTipoDocumento:number;
        tipoDocumento:string;
        idTipoPersona:number;
        tipoPersona:string;
        rangoBusqueda:string;
        PerfilComprador:number;
        PerfilVendedor:number;
        numeroDocumento:number;
}