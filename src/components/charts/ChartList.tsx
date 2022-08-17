import perguntasBarChart from "../../utils/perguntasUtils";
import { ReactElement, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Container } from "../../styles";
import BarChart, { DadosChart } from "./BarChart";
import PieChart from "./PieChart";
import { ChartContainer } from "./styles";

type OptionsSelect = {
    value: string;
    label: string;
};

const optionsSelect: Array<OptionsSelect> = [
    { value: "Qual o seu curso?", label: "Qual o seu curso?" },
    { value: "Qual o período que cursa?", label: "Qual o período que cursa?" },
    {
        value: "Qual o estado do Brasil que você nasceu?",
        label: "Qual o estado do Brasil que você nasceu?",
    },
    {
        value: "Qual sua cidade de residência?",
        label: "Qual sua cidade de residência?",
    },
];

const series: Array<DadosChart> = [
    {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
];

const ChartList: Function = (): ReactElement => {
    const [pergunta, setPergunta] = useState<string>("");

    return (
        <Container>
            <ChartContainer>
                <h2>{pergunta || "Selecione uma pergunta"}</h2>
                <Select
                    defaultValue={optionsSelect[0]}
                    options={optionsSelect}
                    onChange={(
                        event: SingleValue<{
                            value: string;
                            label: string;
                        }>
                    ): void => {
                        const label: string = event ? event.label : "";
                        setPergunta(label);
                    }}
                />
                {perguntasBarChart.includes(pergunta) ? (
                    <BarChart
                        series={series}
                        categories={[
                            ["John ", "sssdDoe"],
                            ["Joe", "Smith"],
                            ["Jake", "Williams"],
                            "Amber",
                            ["Peter", "Brown"],
                            ["Mary", "Evans"],
                            ["David", "Wilson"],
                            ["Lily", "Roberts"],
                            ["Lily", "Roberts"],
                            ["Lily", "Roberts"],
                        ]}
                    />
                ) : (
                    <PieChart />
                )}
            </ChartContainer>
        </Container>
    );
};

export default ChartList;
