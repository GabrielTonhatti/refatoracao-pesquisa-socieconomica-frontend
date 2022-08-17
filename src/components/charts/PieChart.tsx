import { ApexOptions } from "apexcharts";
import React, { ReactElement } from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions: ApexOptions = {
    series: [44, 25],
    chart: {
        width: 380,
        type: "pie",
    },
    dataLabels: {
        enabled: true,
        textAnchor: "middle",
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
    legend: {
        show: true,
    },
    labels: ["ADS", "GPI", "GRH", "DSM"],
};

const PieChart: Function = (): ReactElement => {
    return (
        <div className="chart">
            <ReactApexChart
                options={chartOptions}
                series={chartOptions.series}
                type="pie"
                width={400}
            />
        </div>
    );
};

export default PieChart;
