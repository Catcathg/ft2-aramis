import "./ContentPageModele.css";
import Nav from "./Nav";
import Chevron from "../assets/Images/Chevron.svg";
import RadarChart from "./RadarChart";
import { useParams } from "react-router";
import dataset from '@data/aramis-auto/stock-arrivage.json';
import Parking from '@/assets/Images/Parking.png';
import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import BarChartStock from "./BarChartStock";
import Vector from "../assets/Images/Vector.svg"
import manual from "../assets/Images/manual-gearboxes.svg"
import auto from "../assets/Images/auto-gearboxes.svg"

import _ from 'lodash';

export default function ContentPageModele() {

    const params = useParams();
    const modele = params.modele;

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
                return !!item && String(item.VEHICULE_MODELE) === String(modele);
            })?.VEHICULE_MARQUE);
            sectCar(dataset.filter((item: any) => {
                return !!item && String(item.VEHICULE_MODELE) === String(modele);
            }));
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
                    <div className="TitleDate">
                        <h1 className='Title'>{!!marque && marque} {!!modele && modele}</h1>
                        <div className="contentPremierGraphique">
                            <div className="En-tête1erGraphique">
                                <span className='SousTitrePremierGraphique'>Forecasts</span>
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
                        </div>
                    </div>
                    <div className="contentDeuxiemeGraphique">
                        <div className="DeuxiemeGraphique">
                            <div className="colonneUneGraphique">
                                <h3 className='SousTitreDeuxiemeGraphique'>Comparison of the market share of the C3 on the automobile market and at Aramis</h3>
                                <div className='Bar'> <BarChart /> </div>
                            </div>
                        </div>
                        <div className="colonneDeuxiemeGraphique">
                            <p className="titreEnergy">Energy Market Share</p>
                            <div className="Energytypediv">
                                <img src={Vector} alt="img energy" />
                            </div>
                            <p className="titreGearboxes">Gearboxes market share</p>
                            <div className="Gearboxestypediv">
                                <img src={manual} alt="img manual gearboxes" />
                                <img src={auto} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="contentTroisiemeGraphique">
                        <div className="TroixièmeGraphique">
                            <p className='SousTitreTroixièmeGraphique'>Stock of vehicles at each stage of sale</p>
                            <div className='Bar'> <BarChartStock /></div>
                        </div>
                    </div>
                </div>
            </>
            :
            <>No data</>
    );
}
