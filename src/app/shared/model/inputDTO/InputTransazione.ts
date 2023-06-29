import { InputVendita } from "./InputVendita"

export class InputTransazione {
    id: number
    data: Date
    tipo: string
    prezzoTotale: number
    info: string
    vendite: InputVendita[]

    constructor(id: number, data: Date, tipo: string, prezzoTotale: number, info: string, vendite: InputVendita[]) {
        this.id = id
        this.data = data
        this.tipo = tipo
        this.prezzoTotale = prezzoTotale
        this.info = info
        this.vendite = vendite
    }
}