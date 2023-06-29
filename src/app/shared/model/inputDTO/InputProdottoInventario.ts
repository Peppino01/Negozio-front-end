import { StatoProdotto } from "../StatoProdotto"

export class InputProdottoInventario {
    nome: string
    stato: StatoProdotto
    quantita: number
    prezzo: number
    descrizione: string

    constructor(nome: string, prezzo: number, descrizione: string, quantita: number, stato: StatoProdotto) {
        this.nome = nome
        this.stato = stato
        this.quantita = quantita
        this.prezzo = prezzo
        this.descrizione = descrizione
    }
}