import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import "./BarChart.css";
import DataSetStockVente from '@data/aramis-auto/stock-arrivage.json';
import _ from "lodash";


function BarChartStock() {
  const params = useParams();
  const modele = params.modele;
  const selectedCar = DataSetStockVente.find((item: any) => String(item.VEHICULE_MODELE) === String(modele));
  if (!selectedCar) {
    return <p>model not found</p>
  }
  const marque = selectedCar.VEHICULE_MARQUE;
  const cars = DataSetStockVente.filter((item: any) => String(item.VEHICULE_MODELE) === String(modele));

  const ModelsStockVente = cars.reduce((acc, item) => {
    if (acc[item.STATUT_VEHICULE_ROBUSTO] === undefined) return acc;
    acc[item.STATUT_VEHICULE_ROBUSTO] = (acc[item.STATUT_VEHICULE_ROBUSTO] || 0) + 1;
    return acc;
  }, {
    "Confirmé fournisseur": 0,
    "Arrivé fournisseur": 0,
    "En cours de préparation": 0,
    "Préparation effectuée. VH prêt": 0,
    "Arrivé Aramis": 0
  });

  const config = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: Object.keys(ModelsStockVente),
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
        data: Object.values(ModelsStockVente),
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
