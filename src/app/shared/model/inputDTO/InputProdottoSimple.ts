export class InputProdottoSimple {
    nome: string
    prezzo: number
    descrizione: string

    constructor(nome: string, prezzo: number, descrizione: string) {
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
    }
}