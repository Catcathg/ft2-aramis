import flag from './../../assets/Images/flag.svg'
import profil from './../../assets/Images/profil.svg'

function Home() {

  return (
    <>
      <li>Home</li>
      <li>Arrival / Stock on sale</li>
      <li>Market trends</li>
      <li>Forecast</li>
      <div>
        <img src={flag} />
        <img src={profil} />
      </div>
    </>

  )
}

export default Home