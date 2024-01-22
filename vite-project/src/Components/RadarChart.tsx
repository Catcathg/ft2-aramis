import React, { PureComponent, useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


import _ from 'lodash';




export default function RadarCharts({ data, modele, steps, fournisseur1 }, { statut }) {

  console.log("data: ", data)
  console.log("modele: ", modele)
  console.log("steps: ", steps)



  const [dataLoaded, setDataLoaded] = useState<any>(null);
  const [dataFormated, setDataFormated] = useState<any>(null);
  const [dataMax, setDataMax] = useState<any>(null);


  useEffect(() => {
    if (data && data.length > 0) {
      setDataLoaded(data)
    }
  }, [data]);


  useEffect(() => {
    if (dataLoaded && dataLoaded.length > 0) {

      let tmpArrayData = [];
      steps.map((elt: any, index: number) => {


        console.log('elt: ', elt)
        tmpArrayData.push({
          subject: elt,
          A: _.sumBy(dataLoaded, function (o:any) {

            // console.log('A: ', o.STATUT_VEHICULE_ROBUSTO)
            return o.STATUT_VEHICULE_ROBUSTO === elt
          }),
          B: 110,
          // fullMark: maxValue, // Laisser vide pour que le chart se dimension sur son propre max
        })

      })

      setDataFormated(tmpArrayData);
    }
  }, [dataLoaded]);

  useEffect(() => {
    console.log('dataFormated: ', dataFormated)

  }, [dataFormated]);




  return (
    !!dataFormated &&
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={dataFormated}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, dataMax]} />
        <Radar name="Objectifs" dataKey="B" stroke="#F26914" fill="#F695A8" fillOpacity={0.6} />
        <Radar name={fournisseur1} dataKey="A" stroke="#8884d8" fill="#5694C4" fillOpacity={0.6} />

        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

