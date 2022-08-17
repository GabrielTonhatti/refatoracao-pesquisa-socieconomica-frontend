import { ApexOptions } from "apexcharts";
import { ReactElement } from "react";
import ReactApexChart from "react-apexcharts";

const chartOptions: ApexOptions = {
    chart: {
        width: 380,
        type: "pie",
    },
    dataLabels: {
        enabled: true,
        textAnchor: "start",
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
};

type PropsPieChart = {
    series?: Array<number>;
    labels?: Array<string>;
};

const PieChart: Function = (props: PropsPieChart): ReactElement => {
    return (
        <div className="chart">
            <ReactApexChart
                options={{
                    ...chartOptions,
                    labels: props.labels,
                }}
                series={props.series}
                type="pie"
                width={400}
            />
        </div>
    );
};

export default PieChart;
