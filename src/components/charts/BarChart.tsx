import { ApexOptions } from "apexcharts";
import { ReactElement } from "react";
import ReactApexChart from "react-apexcharts";
import { colors } from "utils/colors";

const chartBarOptions: ApexOptions = {
    chart: {
        width: "100%",
        type: "bar",
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: true,
    },
    legend: {
        show: false,
    },
    colors: colors,
};

export type DadosChart = {
    name: string;
    data: Array<number>;
};

type CategoriesType = string | Array<string>;

type PropsBarChart = {
    series: Array<DadosChart>;
    categories: Array<CategoriesType>;
    distributed?: boolean;
    horizontal?: boolean;
};

type BarChartType = {
    (props: PropsBarChart): ReactElement;
    defaultProps: {
        distributed: boolean;
        horizontal: boolean;
    };
};

const BarChart: BarChartType = (props: PropsBarChart): ReactElement => {
    return (
        <ReactApexChart
            options={{
                ...chartBarOptions,
                xaxis: { categories: props.categories },
                plotOptions: {
                    ...chartBarOptions.plotOptions,
                    bar: {
                        distributed: props.distributed,
                        horizontal: false,
                    },
                },
            }}
            series={props.series}
            type="bar"
            height={350}
        />
    );
};

BarChart.defaultProps = {
    distributed: false,
    horizontal: true,
};

export default BarChart;
