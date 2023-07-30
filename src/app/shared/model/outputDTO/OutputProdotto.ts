import { OutputInventario } from "./OutputInventario"
import { OutputRecensione } from "./OutputRecensione"
import { OutputVendita } from "./OutputVendita"


export class OutputProdotto {
    nome: string
    prezzo: number
    descrizione: string
    vendite: OutputVendita[]
    recensioni: OutputRecensione[]
    inventario: OutputInventario[]

    constructor(nome: string, prezzo: number, descrizione: string, vendite: OutputVendita[], recensioni: OutputRecensione[], inventario: OutputInventario[]) {
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
        this.vendite = vendite
        this.recensioni = recensioni
        this.inventario = inventario
    }
}