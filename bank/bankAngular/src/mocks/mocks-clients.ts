import { Client } from "src/models/client";

export const CLIENTS: Client[] = [
    {id: 1, id_gestor: 1, usuario: 'usuario01', password: '1234', correo: 'us1@gmail.com', saldo: 1234},
    {id: 2, id_gestor: 1, usuario: 'usuario02', password: '1234', correo: 'us2@gmail.com', saldo: 2345},
    {id: 3, id_gestor: 2, usuario: 'usuario03', password: '1234', correo: 'us3@gmail.com', saldo: 3456},
    {id: 4, id_gestor: 3, usuario: 'usuario04', password: '1234', correo: 'us4@gmail.com', saldo: 456}
]