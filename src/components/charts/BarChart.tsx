import React from "react";
import ReactApexChart from "react-apexcharts";
import { ReactElement } from "react";
import { ApexOptions } from "apexcharts";

const chartBarOptions: ApexOptions = {
    series: [
        {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
    ],
    chart: {
        width: "100%",
        type: "bar",
    },
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
        },
    },
    dataLabels: {
        enabled: true,
    },
    xaxis: {
        categories: [
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
        ],
    },
};

// distributed: true,
// horizontal: false,

export type DadosChart = {
    data: Array<number>;
};

type PropsBarChart = {
    series: Array<DadosChart>;
    categories: Array<string>;
    distributed?: boolean;
    horizontal?: boolean;
};

const BarChart: Function = (props: PropsBarChart): ReactElement => {
    return (
        <ReactApexChart
            options={{
                ...chartBarOptions,
                xaxis: { categories: props.categories },
            }}
            series={props.series}
            type="bar"
            height={350}
        />
    );
};

export default BarChart;
