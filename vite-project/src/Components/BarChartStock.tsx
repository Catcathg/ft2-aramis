import React, { useEffect, useState, useMemo } from "react";
import Chart from "react-apexcharts";
import "./BarChart.css";
import DataSetStockVente from '@data/aramis-auto/stock-arrivage.json';
import _ from "lodash";

function BarChartStock() {
  const ModelsStockVente = DataSetStockVente.reduce((acc, item) => {
    if (item.VEHICULE_MARQUE === "208") {
      acc[item.STATUT_VEHICULE_ROBUSTO] = (acc[item.STATUT_VEHICULE_ROBUSTO] || 0) + 1;
    }
    return acc;
  }, {}); 

  const [stepBuilder, setStepBuilder] = useState([]);
  const indicator = "STATUT_VEHICULE_ROBUSTO";

  const arrayStepsConsidered = useMemo(() => [
    "Arrivé fournisseur",
    "Préparation effectuée. VH prêt",
    "En cours de préparation",
    "Confirmé fournisseur",
    "Arrivé Aramis",
  ], []);

  const [marque, setMarque] = useState<string>(null);
  
  useEffect(() => {
    const steps = _.chain(DataSetStockVente)
      .filter((e) => arrayStepsConsidered.includes(e[indicator]))
      .map((e) => e[indicator])
      .uniq()
      .value();
    setStepBuilder(steps);
  }, [arrayStepsConsidered, indicator]);

  const config = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: stepBuilder,
      },
      colors: ["#008FFB", "#00E396"],
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "30%",
        },
      },
    },
    series: [
      {
        name: "Number of Citroën Vehicles",
        data: stepBuilder.map((step) => ModelsStockVente[step] || 0),
        color: "#F695A8",
      },
    ],
  };

  return (
    <div className="app">
      <div className="row">
        <div className="chart-container">
          <div className="mixed-chart">
            <Chart
              options={config.options}
              series={config.series}
              type="bar"
              width="892"
              height="552"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarChartStock;
