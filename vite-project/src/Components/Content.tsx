import background from '@/assets/Images/background.png'
import legendBrand from '@/assets/Images/legendBrand.png'
import legendStep from '@/assets/Images/legendStep.png'
import ListBrand from '@/Components/listBrand';
import './Content.css'


function Content() {
    return (
        <>
            <div>
                <img className="background" src={background} />
            </div>
            <div className="bodyLeft">
                <h1>Marques</h1>
                <img className="legendBrand" src={legendBrand} />
                <img className="legendStep" src={legendStep} />
            </div>
            <div className="bodyCenter">
                <ListBrand />
            </div>

        </>
    )
}

export default Content