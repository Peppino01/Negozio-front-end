import { Ruolo } from "../Ruolo"

export class InputLogin {
    ruolo: Ruolo

    constructor(ruolo: Ruolo) {
        this.ruolo = ruolo
    }
}