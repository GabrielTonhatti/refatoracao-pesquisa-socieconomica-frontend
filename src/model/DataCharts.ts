import Respostas from "./Respostas";

class DataCharts {
    private static readonly INDEX_SIGLA: number = 1;
    private static readonly PARENTESES_ABERTURA: string = "(";
    private static readonly PARENTESES_FECHAMENTO: string = ")";
    private static readonly CURSOS: Array<string> = [
        "Análise e Desenvolvimento de Sistemas (ADS)",
        "Gestão da Produção Industrial (GPI)",
        "Gestão de Recursos Humanos (GRH)",
        "Desenvolvimento de Software Multiplataforma (DSM)",
    ];

    private _pergunta: string;
    private _respostas: Respostas;

    public constructor() {
        this._pergunta = "";
        this._respostas = new Respostas();
    }

    public get pergunta(): string {
        return this._pergunta;
    }

    public set pergunta(value: string) {
        this._pergunta = value;
    }

    public get respostas(): Respostas {
        return this._respostas;
    }

    public set respostas(value: Respostas) {
        this._respostas = value;
    }

    public static of(data: any): Array<DataCharts> {
        const dados: Array<DataCharts> = JSON.parse(data);

        return dados.map((item: DataCharts): DataCharts => {
            item.respostas.labels = DataCharts.formatarRespostaCurso(
                item.respostas.labels
            );

            return item;
        });
    }

    private static formatarRespostaCurso(labels: Array<string>): Array<string> {
        return labels.map((label: string): string =>
            DataCharts.CURSOS.includes(label)
                ? label
                      .split(DataCharts.PARENTESES_ABERTURA)
                      [DataCharts.INDEX_SIGLA].replace(
                          DataCharts.PARENTESES_FECHAMENTO,
                          ""
                      )
                : label
        );
    }
}

export default DataCharts;
