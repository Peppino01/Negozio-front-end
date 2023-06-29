import { OutputVendita } from "./OutputVendita"

export class OutputTransazione {
    id: number
    data: Date
    tipo: string
    prezzoTotale: number
    info: string
    vendite: OutputVendita[]

    constructor(id: number, data: Date, tipo: string, prezzoTotale: number, info: string, vendite: OutputVendita[]) {
        this.id = id
        this.data = data
        this.tipo = tipo
        this.prezzoTotale = prezzoTotale
        this.info = info
        this.vendite = vendite
    }
}