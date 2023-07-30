export class OutputRecensione {
    emailCliente: string
    nomeProdotto: string
    valutazione: number
    commento: string

    constructor(emailCliente: string, nomeProdotto: string, valutazione: number, commento: string) {
        this.emailCliente = emailCliente
        this.nomeProdotto = nomeProdotto
        this.valutazione = valutazione
        this.commento = commento
    }
}