export class OutputRecenzione {
    id: number
    dataPubblicazione: Date
    valutazione: number
    commento: string
    idProdotto: number
    idCliente: number

    constructor(id: number, dataPubblicazione: Date, valutazione: number, commento: string, idProdotto: number, idCliente: number) {
        this.id = id
        this.dataPubblicazione = dataPubblicazione
        this.valutazione = valutazione
        this.commento = commento
        this.idProdotto = idProdotto
        this.idCliente = idCliente
    }
}