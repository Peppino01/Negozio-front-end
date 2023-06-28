import { StatoProdotto } from "../StatoProdotto"


export class OutputProdotto {
    id: number
    nome: string
    prezzo: number
    descrizione: string
    quantita: number
    stato: StatoProdotto

    constructor(id: number, nome: string, prezzo: number, descrizione: string, quantita: number, stato: StatoProdotto) {
        this.id = id
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
        this.quantita = quantita
        this.stato = stato
    }
}