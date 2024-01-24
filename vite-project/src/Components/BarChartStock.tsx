import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom"; 
import Chart from "react-apexcharts";
import "./BarChart.css";
import DataSetStockVente from '@data/aramis-auto/stock-arrivage.json';
import _ from "lodash";


function BarChartStock() {
  const params = useParams();
  const modele = params.modele;
  const [marque, setMarque] = useState<string | null>(null);
  const [car, setCar] = useState<any[]>([]); 
  const [stepBuilder, setStepBuilder] = useState<string[]>([]);
  const indicator = 'STATUT_VEHICULE_ROBUSTO' ;

  const ModelsStockVente = car.reduce((acc, item) => {
    acc[item.STATUT_VEHICULE_ROBUSTO] = (acc[item.STATUT_VEHICULE_ROBUSTO] || 0) + 1;
    return acc;
  }, {});

  const arrayStepsConsidered = useMemo(() => [
    "Confirmé fournisseur",
    "Arrivé fournisseur",
    "En cours de préparation",
    "Préparation effectuée. VH prêt",
    "Arrivé Aramis",
  ], []);

  useEffect(() => {
    const steps = _.chain(car)
      .filter((e) => arrayStepsConsidered.includes(e[indicator]))
      .map((e) => e[indicator])
      .uniq()
      .value();
    setStepBuilder(steps);
  }, [car, arrayStepsConsidered, indicator]);

  useEffect(() => {
    if (DataSetStockVente && DataSetStockVente.length > 0) {
      const selectedCar = DataSetStockVente.find((item: any) => String(item.VEHICULE_MODELE) === String(modele));
      if (selectedCar) {
        setMarque(selectedCar.VEHICULE_MARQUE);
        setCar(DataSetStockVente.filter((item: any) => String(item.VEHICULE_MODELE) === String(modele)));
      }
    }
  }, [modele]);

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
        name: `Number of  ${marque} ${modele} vehicles`,
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
