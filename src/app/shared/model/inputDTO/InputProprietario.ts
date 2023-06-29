import { InputDipendente } from "./InputDipendente"

export class InputProprietario {
    id: number
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date
    dipendenti: InputDipendente[]

    constructor(id: number, nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, dipendenti: InputDipendente[]) {
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