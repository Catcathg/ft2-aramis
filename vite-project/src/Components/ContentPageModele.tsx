import "./ContentPageModele.css"
import Chevron from "../assets/Images/Chevron.svg"
import RadarChart from "./RadarChart"
import { useParams } from "react-router"
import dataset from '@data/aramis-auto/stock-arrivage.json'

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
            <div className="Parking">
            <RadarChart modele ={modele}/>
            </div>
            <div className="ChartsRadar">
            </div>
        </div>
    </>
    )
}