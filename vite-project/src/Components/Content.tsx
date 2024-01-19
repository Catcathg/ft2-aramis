import './Content.css'
import Peugeot from '@/assets/Images/peugeot.svg'
import Citroen from '@/assets/Images/citroen.svg'
import Renault from '@/assets/Images/Renault.svg'
import Skoda from '@/assets/Images/skoda.svg'
import Car1 from '@/assets/Images/car1.png'
import Car2 from '@/assets/Images/car2.png'
import Car3 from '@/assets/Images/car3.png'
import SearchBar from './searchBar'


function Content() {
    return (
        <>
            <div className="content">
                <div className="top">
                    <h1>Welcome back Baptiste !</h1>
                    <h2>Brands</h2>
                </div>
                <div className="bodyLeft">
                    <div className="brandLogo">
                        <img src={Peugeot} />
                        <img src={Citroen} />
                        <img src={Renault} />
                        <img src={Skoda} />
                    </div>
                    <p className="purchase">Purchase in progress</p>
                    <div className="historic">
                        <img src={HistoricPurchase} />
                    </div>
                </div>
                <div className="bodyCenter">
                    <SearchBar />
                </div>
                </div>
            
            </div>


        </>
    )
}

export default Content