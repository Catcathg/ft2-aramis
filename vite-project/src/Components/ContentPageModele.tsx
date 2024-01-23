import "./ContentPageModele.css"
import Nav from "./Nav"
import Chevron from "../assets/Images/Chevron.svg"
import RadarChart from "./RadarChart"
import { useParams } from "react-router"
import dataset from '@data/aramis-auto/stock-arrivage.json'
import Parking from '@/assets/Images/Parking.png'
import { useEffect, useState } from "react"
import BarChart from "./BarChart"

import _ from 'lodash';

export default function ContentPageModele() {

    const params = useParams();
    const modele = params.modele

    const [car, sectCar] = useState<Array>([]);
    const [marque, setMarque] = useState<string>(null);
    const [stepBuilder, setStepBuilder] = useState();
    const indicator = 'STATUT_VEHICULE_ROBUSTO';

    const arrayStepsConsidered = [
        "Arrivé fournisseur",
        "Préparation effectuée. VH prêt",
        // "Transport Programmé",
        // "Arrivé en transit",
        "En cours de préparation",
        "Confirmé fournisseur",
        // "Reprise effective",
        // "A Supprimer",
        // "En cours de transport",
        // "Arrivée intermédiaire",
        "Arrivé Aramis"
    ];

    useEffect(() => {
        if (dataset && dataset.length > 0) {
            setMarque(dataset.find((item: any) => {
                return !!item && String(item.VEHICULE_MODELE) === String(modele)
            })?.VEHICULE_MARQUE)
            sectCar(dataset.filter((item: any) => {
                return !!item && String(item.VEHICULE_MODELE) === String(modele)
            }))
        }
    }, []);


    useEffect(() => {
        let steps = _.chain(dataset.filter((e) => arrayStepsConsidered.includes(e[indicator]))).map(indicator).uniq().value();
        setStepBuilder(steps);
    }, [car]);



    return (
        car ?
            <>
            <Nav />
                <div className='Content'>
                    <h1 className='Titre'>{!!marque && marque} {!!modele && modele}</h1>
                    <div className="En-tête1erGraphique">
                        <p className='SousTitrePremierGraphique'>Forecasts</p>
                        <div className="dateChange">
                            <p>04/10/2023</p>
                            <img src={Chevron} alt="Chevron" />
                        </div>
                    </div>
                    <div className="PremierGraphique">
                        <div className="Parking">
                            <img src={Parking} alt="Parking" />
                        </div>
                        <div className="ChartsRadar">
                            <RadarChart data={car} modele={modele} steps={stepBuilder} fournisseur1={'Aramis'} />
                        </div>
                    </div>
                    <div className="DeuxiemeGraphique">
                        <p className='SousTitreDeuxiemeGraphique'> Comparison of the market share of the C3 on the automobile market and at Aramis :</p>
                        <div className='Bar'> <BarChart /> </div>
                    </div>
                </div>
            </>
            :
            <>No data</>
    )
}