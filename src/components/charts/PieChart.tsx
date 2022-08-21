import { ApexOptions } from "apexcharts";
import { ReactElement } from "react";
import ReactApexChart from "react-apexcharts";
import { colors } from "utils/colors";

const chartOptions: ApexOptions = {
    dataLabels: {
        enabled: true,
        textAnchor: "start",
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 260,
                },
                legend: {
                    position: "bottom",
                    fontSize: "10px",
                },
                dataLabels: {
                    enabled: false,
                },
            },
        },
    ],
    legend: {
        show: true,
        position: "right",
        horizontalAlign: "center",
        fontSize: "14px",
    },
    colors: colors,
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
                width={500}
            />
        </div>
    );
};

export default PieChart;
