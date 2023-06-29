import { Genere } from "../Genere"

export class OutputCliente {
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date
    genere: Genere

    constructor(nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, genere: Genere) {
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
        this.genere = genere
    }
}