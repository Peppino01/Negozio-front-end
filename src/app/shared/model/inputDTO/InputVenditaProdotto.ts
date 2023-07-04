import { InputProdottoSimple } from "./InputProdottoSimple"

export class InputVenditaProdotto {
    id: number
    quantita: number
    prodotto: InputProdottoSimple

    constructor(id: number, quantita: number, prodotto: InputProdottoSimple) {
        this.id = id
        this.quantita = quantita
        this.prodotto = prodotto
    }
}