export class InputRecensione {
    id: number
    dataPubblicazione: string
    valutazione: number
    commento: string
    nome: string
    cognome: string

    constructor(id: number, dataPubblicazione: string, valutazione: number, commento: string, nome: string, cognome: string) {
        this.id = id
        this.dataPubblicazione = dataPubblicazione
        this.valutazione = valutazione
        this.commento = commento
        this.nome = nome
        this.cognome = cognome
    }
}