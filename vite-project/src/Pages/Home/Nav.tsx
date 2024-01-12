import logo from '../../../src/assets/Images/logo.png'
import flag from '../../../src/assets/Images/flag.svg'
import profil from '../../../src/assets/Images/profil.svg' 


function Nav() {

  return (
    <>
      <div><img src={logo} /></div>
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

export default Nav