import './Content.css'
import Peugeot from '@/assets/Images/peugeot.svg'
import Citroen from '@/assets/Images/citroen.svg'
import Renault from '@/assets/Images/Renault.svg'
import Skoda from '@/assets/Images/skoda.svg'
import Car1 from '@/assets/Images/car1.png'
import Car2 from '@/assets/Images/car2.png'
import Car3 from '@/assets/Images/car3.png'
import StockIcon from '@/assets/Images/stock-icon.svg'
import ArrivageIcon from '@/assets/Images/arrivage-icon.svg'
import Line from '@/assets/Images/line.svg'
import SearchBar from './searchBar'
import List from './List'
import HistoricItemsTableau from './HistoricItems'

function Content() {

    return (
        <>
            <div className="content">
                <div className="top">
                    <h1>Welcome back Baptiste !</h1>
                    <h2>Brands</h2>
                </div>
                <div className="contentBody">
                    <div className="bodyLeft">
                        <div className="brandLogo">
                            <a href="#"><img className="brand" src={Peugeot} alt="PeugeotBrand" /></a>
                            <a href="#"><img className="brand" src={Citroen} alt="CitroenBrand" /></a>
                            <a href="#"><img className="brand" src={Renault} alt="RenaultBrand" /></a>
                            <a href="#"><img className="brand" src={Skoda} alt="SkodaBrand" /></a>
                        </div>
                        <div className="historic">
                            <p className="purchase">Purchase in progress</p>
                            <HistoricItemsTableau />
                        </div>
                    </div>
                    <div className="bodyCenter">
                        <SearchBar />
                        <List />
                    </div>
                    <div className="bodyRight">
                        <p className="stock">Lowest stocks</p>
                        <div className="card">
                            <div className="box1">
                                <img className="imageCar" src={Car1} alt="Car1" />
                                <div className="infoCar">
                                    <p className="nameCar">Peugeot 108</p>
                                    <div className="stockInfo">
                                        <span>0</span>
                                        <img src={StockIcon} alt="Stock Icon" />
                                        <img src={Line} alt="separator line" />
                                        <span>14</span>
                                        <img src={ArrivageIcon} alt="Arrivage Icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="box2">
                                <img className="imageCar" src={Car2} alt="Car2" />
                                <div className="infoCar">
                                    <p className="nameCar">Peugeot 508 SW</p>
                                    <div className="stockInfo">
                                        <span>1</span>
                                        <img src={StockIcon} alt="Stock Icon" />
                                        <img src={Line} alt="separator line" />
                                        <span>5</span>
                                        <img src={ArrivageIcon} alt="Arrivage Icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="box3">
                                <img className="imageCar" src={Car3} alt="Car3" />
                                <div className="infoCar">
                                    <p className="nameCar">Jumper Fourgon</p>
                                    <div className="stockInfo">
                                        <span>2</span>
                                        <img src={StockIcon} alt="Stock Icon" />
                                        <img src={Line} alt="separator line" />
                                        <span>0</span>
                                        <img src={ArrivageIcon} alt="Arrivage Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content