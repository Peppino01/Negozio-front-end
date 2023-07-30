import { Genere } from "../Genere"
import { InputRecensione } from "./InputRecensione"
import { InputTransazione } from "./InputTransazione"

export class InputCliente {
    id: number
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date
    genere: Genere
    transazioni: InputTransazione[]
    recensioni: InputRecensione[]

    constructor(id: number, nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, genere: Genere, transazioni: InputTransazione[], recensioni: InputRecensione[]) {
        this.id = id
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
        this.genere = genere
        this.transazioni = transazioni
        this.recensioni = recensioni
    }
}