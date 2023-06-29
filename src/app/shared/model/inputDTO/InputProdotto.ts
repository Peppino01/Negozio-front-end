import { InputInventario } from "./InputInventario"
import { InputRecenzione } from "./InputRecenzione"
import { InputVendita } from "./InputVendita"

export class InputProdotto {
    id: number
    nome: string
    prezzo: number
    descrizione: string
    vendite: InputVendita[]
    recenzioni: InputRecenzione[]
    inventario: InputInventario[]

    constructor(id: number, nome: string, prezzo: number, descrizione: string, vendite: InputVendita[], recenzioni: InputRecenzione[], inventario: InputInventario[]) {
        this.id = id
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
        this.vendite = vendite
        this.recenzioni = recenzioni
        this.inventario = inventario
    }
}