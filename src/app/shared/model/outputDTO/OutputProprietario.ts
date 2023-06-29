import { OutputDipendente } from "./OutputDipendente"

export class OutputProprietario {
    id: number
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date
    dipendenti: OutputDipendente[]

    constructor(id: number, nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, dipendenti: OutputDipendente[]) {
        this.id = id
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
        this.dipendenti = dipendenti
    }
}