import Chart from "react-apexcharts";

function BarChart({}) {
  const config = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Aug.', 'Sept.', 'Oct.']
      },
      colors: ['#008FFB', '#00E396'],
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '30%'
        }
      }
    },
    series: [
      {
        name: "French Market",
        data: [30, 40, 45],
        color: '#F695A8'
      },
      {
        name: "Aramis Auto",
        data: [15, 25, 30],
        color: '#A7CDEA'
      }
    ]
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={config.options}
            series={config.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default BarChart;