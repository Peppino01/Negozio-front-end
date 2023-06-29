import { StatoProdotto } from "../StatoProdotto"
import { InputInventario } from "./InputInventario"
import { InputRecenzione } from "./InputRecenzione"

export class InputProdotto {
    id: number
    nome: string
    prezzo: number
    descrizione: string
    quantita: number
    stato: StatoProdotto
    recenzioni: InputRecenzione[]
    inventario: InputInventario[]

    constructor(id: number, nome: string, prezzo: number, descrizione: string, quantita: number, stato: StatoProdotto, recenzioni: InputRecenzione[], inventario: InputInventario[]) {
        this.id = id
        this.nome = nome
        this.prezzo = prezzo
        this.descrizione = descrizione
        this.quantita = quantita
        this.stato = stato
        this.recenzioni = recenzioni
        this.inventario = inventario
    }
}