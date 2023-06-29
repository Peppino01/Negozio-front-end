import { StatoProdotto } from "../StatoProdotto"

export class InputInventario {
    id: number
    quantita: number
    stato: StatoProdotto

    constructor(id: number, quantita: number, stato: StatoProdotto) {
        this.id = id
        this.quantita = quantita
        this.stato = stato
    }
}