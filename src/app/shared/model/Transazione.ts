export class Transazione {
    id: number
    data: Date
    idCliente: number
    tipo: string
    prezzoTotale: number
    info: string

    constructor(id: number, data: Date, idCliente: number, tipo: string, prezzoTotale: number, info: string) {
        this.id = id
        this.data = data
        this.idCliente = idCliente
        this.tipo = tipo
        this.prezzoTotale = prezzoTotale
        this.info = info
    }
}