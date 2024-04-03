import { Principal } from "./Principal";

export class Periferico extends Principal {

    private _periferico: string;


    constructor(id: number, nome: string, tipo: number, preco: number, periferico: string) {
        super(id, nome, tipo, preco)
        this._periferico = periferico;
    }

    /**
     * Getter periferico
     * @return {string}
     */
    public get periferico(): string {
        return this._periferico;
    }

    /**
     * Setter periferico
     * @param {string} value
     */
    public set periferico(value: string) {
        this._periferico = value;
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Periferico: ${this._periferico}`)
    }
}