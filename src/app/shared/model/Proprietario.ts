export class Proprietario {
    id: number
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date

    constructor(id: number, nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date) {
        this.id = id
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
    }
}