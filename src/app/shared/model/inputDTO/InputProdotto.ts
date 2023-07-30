import { InputInventario } from "./InputInventario"
import { InputRecensione } from "./InputRecensione"
import { InputVendita } from "./InputVendita"

export class InputProdotto {
    id: number
    nome: string
    prezzo: number
    descrizione: string
    vendite: InputVendita[]
    recensioni: InputRecensione[]
    inventario: InputInventario[]

    constructor(id: number, nome: string, prezzo: number, descrizione: string, vendite: InputVendita[], recensioni: InputRecensione[], inventario: InputInventario[]) {
        this.id = id
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
        this.vendite = vendite
        this.recensioni = recensioni
        this.inventario = inventario
    }
}