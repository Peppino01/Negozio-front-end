import { InputClienteSimple } from "./InputClienteSimple"
import { InputVenditaProdotto } from "./InputVenditaProdotto"

export class InputTransazioneDetail {
    id: number
    data: Date
    tipo: string
    prezzoTotale: number
    info: string
    vendite: InputVenditaProdotto[]
    cliente: InputClienteSimple

    constructor(id: number, data: Date, tipo: string, prezzoTotale: number, info: string, vendite: InputVenditaProdotto[], cliente: InputClienteSimple) {
        this.id = id
        this.data = data
        this.tipo = tipo
        this.prezzoTotale = prezzoTotale
        this.info = info
        this.vendite = vendite
        this.cliente = cliente
    }
}