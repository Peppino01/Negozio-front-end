import { OutputInventario } from "./OutputInventario"
import { OutputRecenzione } from "./OutputRecenzione"
import { OutputVendita } from "./OutputVendita"


export class OutputProdotto {
    nome: string
    prezzo: number
    descrizione: string
    vendite: OutputVendita[]
    recenzioni: OutputRecenzione[]
    inventario: OutputInventario[]

    constructor(nome: string, prezzo: number, descrizione: string, vendite: OutputVendita[], recenzioni: OutputRecenzione[], inventario: OutputInventario[]) {
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
        this.vendite = vendite
        this.recenzioni = recenzioni
        this.inventario = inventario
    }
}