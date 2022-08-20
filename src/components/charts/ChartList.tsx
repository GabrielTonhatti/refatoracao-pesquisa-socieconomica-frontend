import { useMediaQuery } from "@mui/material";
import { Turno } from "enums/Turno";
import DataCharts from "model/DataCharts";
import {
    ChangeEvent,
    ChangeEventHandler,
    ReactElement,
    useEffect,
    useState,
} from "react";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { Container } from "../../styles";
import perguntasBarChart, {
    perguntarBarChartHorizontal,
    peruntasNaoExibirLabel,
} from "../../utils/perguntasUtils";
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
    const [selectTurno] = useState<Array<OptionsSelect>>([
        { value: "G", label: "Geral" },
        { value: "M", label: "Matutino" },
        { value: "N", label: "Noturno" },
    ]);
    const [turno, setTurno] = useState<string>("");
    const [series, setSeries] = useState<Array<number>>([]);
    const [categories, setCategories] = useState<Array<string>>([]);
    const [seriesBarChart, setSeriesBarChart] = useState<Array<DadosChart>>([]);
    const [categoriesBarChart, setCategoriesBarChart] = useState<
        Array<string> | Array<Array<string>>
    >([]);
    const [horizontal, setHorizontal] = useState<boolean>(true);
    const showLabel: boolean = useMediaQuery("(max-width: 768px)");
    const naoExibirLabel: boolean = peruntasNaoExibirLabel.includes(pergunta);

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

    const updateSeries: Function = (series: Array<number>): void => {
        setSeries(series);
        setSeriesBarChart([
            {
                name: "Quantidade",
                data: series,
            },
        ]);
    };

    const updateCategories: Function = (
        categories: Array<string>,
        categoriesBarChart: Array<Array<string>>
    ): void => {
        setCategories(categories);
        setCategoriesBarChart(categoriesBarChart);
    };

    useEffect((): void => {
        const dados: string | null = sessionStorage.getItem("dados");

        if (dados) {
            const dadosConvertidos: Array<DataCharts> = DataCharts.of(dados);
            const dataCategories: Array<string> =
                dadosConvertidos[0].respostas.labels;
            const categoriesBarChart: Array<Array<string>> =
                obterCategoriesBarChart(dataCategories);
            const series: Array<number> = dadosConvertidos[0].respostas.data;

            updateOptions(dadosConvertidos, setSelectedOption);
            updateSeries(series);
            updateCategories(dataCategories, categoriesBarChart);
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
        const dataCategories: Array<string> = dadosFiltrados.respostas.labels;
        const categoriesBarChart: Array<Array<string>> =
            obterCategoriesBarChart(dataCategories);
        const series: Array<number> = dadosFiltrados.respostas.data;

        if (perguntarBarChartHorizontal.includes(opcao)) {
            setHorizontal(true);
        } else {
            setHorizontal(false);
        }

        if (turno !== Turno.GERAL) {
            atualizarGraficosPorFiltro(turno, dadosFiltrados);
        } else {
            updateCategories(dataCategories, categoriesBarChart);
            updateSeries(series);
        }
    };

    const obterCategoriesBarChart: Function = (
        dataCategories: Array<string>
    ): Array<Array<string>> => {
        return dataCategories
            .map((data: string): string => data.toString())
            .map((categorie: string): Array<string> => categorie.split(" "));
    };

    const atualizarGraficosPorFiltro: Function = (
        opcaoTurno: string,
        dados: DataCharts
    ): void => {
        let dataSeries: Array<number>;
        let dataCategories: Array<string>;
        let dataCategoriesBarChart: Array<Array<string>>;

        if (opcaoTurno === Turno.MATUTINO) {
            dataSeries = dados?.respostasMatutino.data as Array<number>;
            dataCategories = dados?.respostasMatutino.labels;
            dataCategoriesBarChart = obterCategoriesBarChart(dataCategories);
            updateSeries(dataSeries);
            updateCategories(dataCategories, dataCategoriesBarChart);
        } else if (opcaoTurno === Turno.NOTURNO) {
            dataSeries = dados?.respostasNoturno.data as Array<number>;
            dataCategories = dados?.respostasNoturno.labels;
            dataCategoriesBarChart = obterCategoriesBarChart(dataCategories);

            updateSeries(dataSeries);
            updateCategories(dataCategories, dataCategoriesBarChart);
        } else {
            dataSeries = dados?.respostas.data as Array<number>;
            dataCategories = dados?.respostas.labels;
            dataCategoriesBarChart = obterCategoriesBarChart(dataCategories);

            updateSeries(dataSeries);
            updateCategories(dataCategories, dataCategoriesBarChart);
        }
    };

    const handleChangeFilter: ChangeEventHandler<HTMLSelectElement> = (
        event: ChangeEvent<HTMLSelectElement>
    ): void => {
        const opcao: string = event.target.value;
        setTurno(opcao);
        const dados: Array<DataCharts> = DataCharts.of(
            sessionStorage.getItem("dados")
        );
        const dadosFiltrados: DataCharts = dados.find(
            (data: DataCharts): boolean => data.pergunta === pergunta
        ) as DataCharts;

        atualizarGraficosPorFiltro(opcao, dadosFiltrados);
    };

    return (
        <Container>
            <ChartContainer>
                <div className="title">
                    <TitlePergunta>
                        {pergunta || "Selecione uma pergunta"}
                    </TitlePergunta>

                    <div className="container-filtro">
                        <span>
                            <FaFilter /> Filtro:
                        </span>
                        <select
                            className="filtro"
                            onChange={handleChangeFilter}
                        >
                            {selectTurno.map(
                                (turno: OptionsSelect): ReactElement => (
                                    <option
                                        key={turno.value}
                                        value={turno.label}
                                    >
                                        {turno.label}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                </div>
                {pergunta && (
                    <>
                        <Select
                            defaultValue={selectedOption[0]}
                            options={selectedOption}
                            onChange={handleChange}
                            className="perguntas"
                        />
                        {perguntasBarChart.includes(pergunta) ? (
                            <BarChart
                                series={seriesBarChart}
                                categories={categoriesBarChart}
                                distributed={true}
                                horizontal={horizontal}
                                showLabel={showLabel || naoExibirLabel}
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
