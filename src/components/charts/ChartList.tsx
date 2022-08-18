import DataCharts from "model/DataCharts";
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

type HandleChangeSelectType = (event: SingleValue<OptionsSelect>) => void;

const ChartList: Function = (): ReactElement => {
    const [pergunta, setPergunta] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<Array<OptionsSelect>>(
        []
    );
    const [series, setSeries] = useState<Array<number>>([]);
    const [categories, setCategories] = useState<Array<string>>([]);
    const [seriesBarChart, setSeriesBarChart] = useState<Array<DadosChart>>([]);
    const [categoriesBarChart, setCategoriesBarChart] = useState<
        Array<string> | Array<Array<string>>
    >([]);
    const [horizontal, setHorizontal] = useState<boolean>(false);

    const updateOptions: Function = (
        dadosConvertidos: Array<DataCharts>,
        setSelectedOption: React.Dispatch<
            React.SetStateAction<Array<OptionsSelect>>
        >
    ): void => {
        const option: Array<OptionsSelect> = dadosConvertidos
            .map((dado: DataCharts): string => dado.pergunta)
            .map(
                (pergunta: string): OptionsSelect => ({
                    value: pergunta,
                    label: pergunta,
                })
            );
        setSelectedOption(option);
    };

    const updateSeries: Function = (dados: DataCharts) => {
        const dataSeries: Array<number> = dados.respostas.data;
        setSeries(dataSeries);
        setSeriesBarChart([
            {
                name: "Quantidade",
                data: dataSeries,
            },
        ]);
    };

    const updateCategories: Function = (dados: DataCharts): void => {
        const dataCategories: Array<string> = dados.respostas.labels;
        setCategories(dataCategories);
        setCategoriesBarChart(
            dataCategories.map(
                (categorie: string): Array<string> => categorie.split(" ")
            )
        );
    };

    useEffect((): void => {
        const dados: string | null = sessionStorage.getItem("dados");

        if (dados) {
            const dadosConvertidos: Array<DataCharts> = DataCharts.of(dados);
            console.log(dadosConvertidos);
            updateOptions(dadosConvertidos, setSelectedOption);
            updateSeries(dadosConvertidos[0]);
            updateCategories(dadosConvertidos[0]);
            setPergunta(dadosConvertidos[0].pergunta);
        }
    }, []);

    const handleChange: HandleChangeSelectType = (
        event: SingleValue<OptionsSelect>
    ): void => {
        const opcao: string = event ? event.label : "";
        setPergunta(opcao);

        const dados: Array<DataCharts> = DataCharts.of(
            sessionStorage.getItem("dados")
        );

        const dadosFiltrados: DataCharts = dados.find(
            (data: DataCharts): boolean => data.pergunta === opcao
        ) as DataCharts;

        updateSeries(dadosFiltrados);
        updateCategories(dadosFiltrados);
    };

    return (
        <Container>
            <ChartContainer>
                <TitlePergunta>
                    {pergunta || "Selecione uma pergunta"}
                </TitlePergunta>
                {pergunta && (
                    <>
                        <Select
                            defaultValue={selectedOption[0]}
                            options={selectedOption}
                            onChange={handleChange}
                        />
                        {perguntasBarChart.includes(pergunta) ? (
                            <BarChart
                                series={seriesBarChart}
                                categories={categoriesBarChart}
                                horizontal={horizontal}
                                distributed={true}
                            />
                        ) : (
                            <PieChart series={series} labels={categories} />
                        )}
                    </>
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
