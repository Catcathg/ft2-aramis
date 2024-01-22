import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import stock from '@data/aramis-auto/stock-arrivage.json'



const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarCharts({modele},{statut}) {
  
  const stockModele = stock.filter(item=>item.VEHICULE_MODELE === modele).length
  const StepBuilder = 
  stock.filter((e: any) => {
    if (!!e.STATUT_VEHICULE_ROBUSTO) {
        return !!e && e[`${e.STATUT_VEHICULE_ROBUSTO}`] === ""
    } else {
        return e
    }
})  

const data = [
    {
      subject: 'Bought',
      A: stockModele,
      B: 40,
      fullMark: stockModele + 10,
    },
    {
      subject: 'Arrivals',
      A: stockModele, 
      B: 40,
      fullMark: stockModele + 5,
    },
    {
      subject: 'Waiting for sale',
      A: stockModele, 
      B: 30,
      fullMark: stockModele + 40,
    },
    {
      subject: 'For sale',
      A: stockModele, 
      B: 45,
      fullMark: stockModele + 50,
    },
    {
      subject: 'Sold',
      A: stockModele, 
      B: 15,
      fullMark: stockModele + 3,
    },
  ]
  const max = data.reduce((acc, item)=> acc > item.fullMark?acc:item.fullMark, 0)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, max]} />
        <Radar name="Aramis" dataKey="A" stroke="#8884d8" fill="#5694C4" fillOpacity={0.6} />
        <Radar name="Objectifs" dataKey="B" stroke="#F26914" fill="#F695A8" fillOpacity={0.6} />

        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

