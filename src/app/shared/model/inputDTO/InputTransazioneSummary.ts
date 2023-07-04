export class InputTransazioneSummary {
    id: number
    data: Date
    tipo: string
    prezzoTotale: number

    constructor(id: number, data: Date, tipo: string, prezzoTotale: number) {
        this.id = id
        this.data = data
        this.tipo = tipo
        this.prezzoTotale = prezzoTotale
    }
}