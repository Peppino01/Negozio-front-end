export class OutputRecenzione {
    id: number
    dataPubblicazione: Date
    valutazione: number
    commento: string

    constructor(id: number, dataPubblicazione: Date, valutazione: number, commento: string) {
        this.id = id
        this.dataPubblicazione = dataPubblicazione
        this.valutazione = valutazione
        this.commento = commento
    }
}