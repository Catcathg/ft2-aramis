import "./ContentPageModele.css"
import Chevron from "../assets/Images/Chevron.svg"
import RadarChart from "./RadarChart"
import { useParams } from "react-router"
import dataset from '@data/aramis-auto/stock-arrivage.json'
import Parking from '@/assets/Images/Parking.png'
import BarChart from "./BarChart"

export default function ContentPageModele() {

    const params= useParams();
    const modele = params.modele
    const car = dataset.find(item=>item.VEHICULE_MODELE === modele)
    return(
    <>
        <div className='Content'>
            <h1 className='Titre'>{car.VEHICULE_MARQUE} {car.VEHICULE_MODELE}</h1>
                <div className="En-tête1erGraphique">
                    <p className='SousTitrePremierGraphique'>Prévisions :</p>
                    <div className="dateChange">
                        <p>04/10/2023</p>
                        <img src= {Chevron} alt="Chevron" />
                    </div>
                </div>
            <div className="PremierGraphique">
                <div className="Parking">
                    <img src={Parking} alt="Parking" />
                </div>
                <div className="ChartsRadar">
                    <RadarChart modele = {modele}/>
                </div>
            </div>
            <div className="DeuxiemeGraphique">
            <p className='SousTitreDeuxiemeGraphique'> Comparison of the market share of the C3 on the automobile market and at Aramis :</p>
            <div className='Bar'> <BarChart/> </div>
            </div>
        </div>

    </>
    )
}