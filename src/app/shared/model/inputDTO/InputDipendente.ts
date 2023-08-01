export class InputDipendente {
    id: number
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: string
    stipendio: number

    constructor(id: number, nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: string, stipendio: number) {
        this.id = id
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
        this.stipendio = stipendio
    }
}