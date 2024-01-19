import './Content.css'
import Peugeot from '@/assets/Images/peugeot.svg'
import Citroen from '@/assets/Images/citroen.svg'
import Renault from '@/assets/Images/Renault.svg'
import Skoda from '@/assets/Images/skoda.svg'
import Car1 from '@/assets/Images/car1.png'
import Car2 from '@/assets/Images/car2.png'
import Car3 from '@/assets/Images/car3.png'
import SearchBar from './searchBar'
import List from './List'


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
                            <img className="brand" src={Peugeot} />
                            <img className="brand" src={Citroen} />
                            <img className="brand"src  ={Renault} />
                            <img className="brand" src ={Skoda} />
                        </div>
                        <p className="purchase">Purchase in progress</p>
                        <div className="historic">
                            
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
                                <img src={Car1} />
                                <span>Peugeot 108</span>
                            </div>
                            <div className="box2">
                                <img src={Car2} />
                                <span>Peugeot 508 SW</span>
                            </div>
                            <div className="box3">
                                <img src={Car3} />
                                <span>Jumper Fourgon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Content