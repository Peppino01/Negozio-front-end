export class InputInfoCliente {
    nome: string
    cognome: string
    numProdottiCarrello: number

    constructor(nome: string, cognome: string, numProdottiCarrello: number) {
        this.nome = nome
        this.cognome = cognome
        this.numProdottiCarrello = numProdottiCarrello
    }
}