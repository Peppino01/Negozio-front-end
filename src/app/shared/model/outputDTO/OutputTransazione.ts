import { OutputVendita } from "./OutputVendita"

export class OutputTransazione {
    data: Date
    tipo: string
    prezzoTotale: number
    info: string
    vendite: OutputVendita[]

    constructor(data: Date, tipo: string, prezzoTotale: number, info: string, vendite: OutputVendita[]) {
        this.data = data
        this.tipo = tipo
        this.prezzoTotale = prezzoTotale
        this.info = info
        this.vendite = vendite
    }
}