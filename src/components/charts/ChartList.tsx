import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { Container } from "../../styles";
import perguntasBarChart from "../../utils/perguntasUtils";
import { DivButton } from "../form/styles";
import BarChart, { DadosChart } from "./BarChart";
import PieChart from "./PieChart";
import { ButtonVoltar, ChartContainer, TitlePergunta } from "./styles";

type OptionsSelect = {
    value: string;
    label: string;
};

const ChartList: Function = (): ReactElement => {
    const [selectedOption, setSelectedOption] = useState<Array<OptionsSelect>>([
        { value: "Qual o seu curso?", label: "Qual o seu curso?" },
        {
            value: "Qual o período que cursa?",
            label: "Qual o período que cursa?",
        },
        {
            value: "Qual o estado do Brasil que você nasceu?",
            label: "Qual o estado do Brasil que você nasceu?",
        },
        {
            value: "Qual sua cidade de residência?",
            label: "Qual sua cidade de residência?",
        },
    ]);
    const [pergunta, setPergunta] = useState<OptionsSelect>({
        value: "",
        label: "",
    });
    const [series, setSeries] = useState<Array<number>>([44, 25, 10, 30]);
    const [categories, setCategories] = useState<Array<string>>([
        "ADS",
        "GPI",
        "GRH",
        "DSM",
    ]);
    const [seriesBarChart, setSeriesBarChart] = useState<Array<DadosChart>>([
        {
            data: [44, 25, 10, 30],
        },
    ]);

    useEffect((): void => {
        setPergunta(selectedOption[0]);
    }, [selectedOption]);

    return (
        <Container>
            <ChartContainer>
                <TitlePergunta>
                    {pergunta.label || "Selecione uma pergunta"}
                </TitlePergunta>
                <Select
                    defaultValue={selectedOption[0]}
                    options={selectedOption}
                    onChange={(event: SingleValue<OptionsSelect>): void => {
                        const opcao: OptionsSelect = event
                            ? event
                            : { value: "", label: "" };
                        setPergunta(opcao);
                    }}
                />
                {perguntasBarChart.includes(pergunta.label) ? (
                    <BarChart series={seriesBarChart} categories={categories} />
                ) : (
                    <PieChart series={series} labels={categories} />
                )}

                <DivButton>
                    <Link to="/">
                        <ButtonVoltar>Voltar</ButtonVoltar>
                    </Link>
                </DivButton>
            </ChartContainer>
        </Container>
    );
};

export default ChartList;
