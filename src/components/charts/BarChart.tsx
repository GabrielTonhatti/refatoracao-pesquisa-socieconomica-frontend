import { ApexOptions } from "apexcharts";
import { ReactElement } from "react";
import ReactApexChart from "react-apexcharts";

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
};

export type DadosChart = {
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
                        horizontal: props.horizontal,
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
