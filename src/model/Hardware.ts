import { Principal } from "./Principal";

export class Hardware extends Principal {

    private _hardware: string;


    constructor(id: number, nome: string, tipo: number, preco: number, hardware: string) {
        super(id, nome, tipo, preco)
        this._hardware = hardware;
    }

    /**
     * Getter hardware
     * @return {string}
     */
    public get hardware(): string {
        return this._hardware;
    }

    /**
     * Setter hardware
     * @param {string} value
     */
    public set hardware(value: string) {
        this._hardware = value;
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Periferico: ${this._hardware}`)

    }

}