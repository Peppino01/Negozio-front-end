export class Transazione {
    id: number
    idTransazione: number
    idProdotto: number
    quantita: number
    prezzoUnitario: number

    constructor(id: number, idTransazione: number, idProdotto: number, quantita: number, prezzoUnitario: number) {
        this.id = id
        this.idTransazione = idTransazione
        this.idProdotto = idProdotto
        this.quantita = quantita
        this.prezzoUnitario = prezzoUnitario
    }
}