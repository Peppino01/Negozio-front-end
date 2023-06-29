import { StatoProdotto } from "../StatoProdotto"

export class OutputInventario {
    id: number
    quantita: number
    stato: StatoProdotto

    constructor(id: number, quantita: number, stato: StatoProdotto) {
        this.id = id
        this.quantita = quantita
        this.stato = stato
    }
}