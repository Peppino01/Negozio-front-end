import { Genere } from "./Genere"

export class Cliente {
    id?: number
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date
    genere: Genere

    constructor(nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, genere: Genere, id?: number) {
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
        this.genere = genere
        this.id = id
    }
}