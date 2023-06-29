import { Genere } from "../Genere"
import { InputRecenzione } from "./InputRecenzione"
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
    recenzioni: InputRecenzione[]

    constructor(id: number, nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, genere: Genere, transazioni: InputTransazione[], recenzioni: InputRecenzione[]) {
        this.id = id
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
        this.genere = genere
        this.transazioni = transazioni
        this.recenzioni = recenzioni
    }
}