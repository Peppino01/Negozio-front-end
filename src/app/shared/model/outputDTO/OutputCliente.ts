import { Genere } from "../Genere"
import { OutputRecenzione } from "./OutputRecenzione"
import { OutputTransazione } from "./OutputTransazione"


export class OutputCliente {
    id: number
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date
    genere: Genere
    transazioni: OutputTransazione[]
    recenzioni: OutputRecenzione[]

    constructor(id: number, nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, genere: Genere, transazioni: OutputTransazione[], recenzioni: OutputRecenzione[]) {
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