export class InputProdottoCarrello {
    nome: string
    prezzo: number
    descrizione: string
    quantita: number

    constructor(nome: string, prezzo: number, descrizione: string, quantita: number) {
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
        this.quantita = quantita
    }
}