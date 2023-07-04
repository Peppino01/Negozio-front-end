export class InputTransazioneSummary {
    id: number
    data: Date
    tipo: string
    prezzoTotale: number
    info: string

    constructor(id: number, data: Date, tipo: string, prezzoTotale: number, info: string) {
        this.id = id
        this.data = data
        this.tipo = tipo
        this.prezzoTotale = prezzoTotale
        this.info = info
    }
}