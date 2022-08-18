import Respostas from "./Respostas";

class DataCharts {
    private _pergunta: string;
    private _respostas: Respostas;
    private _respostasMatutino: Respostas;
    private _respostasNoturno: Respostas;

    public constructor() {
        this._pergunta = "";
        this._respostas = new Respostas();
        this._respostasMatutino = new Respostas();
        this._respostasNoturno = new Respostas();
    }

    public get pergunta(): string {
        return this._pergunta;
    }

    public set pergunta(pergunta: string) {
        this._pergunta = pergunta;
    }

    public get respostas(): Respostas {
        return this._respostas;
    }

    public set respostas(respostas: Respostas) {
        this._respostas = respostas;
    }

    public get respostasMatutino(): Respostas {
        return this._respostasMatutino;
    }

    public set respostasMatutino(respostas: Respostas) {
        this._respostasMatutino = respostas;
    }

    public get respostasNoturno(): Respostas {
        return this._respostasNoturno;
    }

    public set respostasNoturno(respostas: Respostas) {
        this._respostasNoturno = respostas;
    }

    public static of(data: any): Array<DataCharts> {
        return JSON.parse(data) as Array<DataCharts>;
    }
}

export default DataCharts;
