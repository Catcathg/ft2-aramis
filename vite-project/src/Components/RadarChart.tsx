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

export default function RadarCharts({modele}) {
  const stockModele = stock.filter(item=>item.VEHICULE_MODELE === modele).length


  const data = [
    {
      subject: 'Arrivage',
      A: stockModele, 
      fullMark: stockModele + 10,
    },
    {
      subject: 'Arrivage 2',
      A: stockModele, 
      fullMark: stockModele + 5,
    },
    {
      subject: 'Arrivage 3',
      A: stockModele, 
      fullMark: stockModele + 40,
    },
    {
      subject: 'Arrivage 4',
      A: stockModele, 
      fullMark: stockModele + 50,
    },
    {
      subject: 'Arrivage 5',
      A: stockModele, 
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
        <Radar name="Aramis" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

