export class OutputDipendente {
    nome: string
    cognome: string
    email: string
    password: string
    numTelefono: string
    dataNascita: Date
    stipendio: number

    constructor(nome: string, cognome: string, email: string, password: string, numTelefono: string, dataNascita: Date, stipendio: number) {
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
        this.numTelefono = numTelefono
        this.dataNascita = dataNascita
        this.stipendio = stipendio
    }
}