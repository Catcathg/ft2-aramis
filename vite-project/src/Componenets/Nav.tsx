import logo from '../assets/Images/logo.png'
import flag from '../assets/Images/flag.svg'
import profil from '../assets/Images/profil.svg'
import './Nav.css'


function Nav() {

  return (
    <>
      <div><img src={logo} /></div>
      <ul>
        <li>Home</li>
        <li>Arrival / Stock on sale</li>
        <li>Market trends</li>
        <li>Forecast</li>
      </ul>
      <div>
        <img src={flag} />
        <img src={profil} />
      </div>
    </>

  )
}

export default Nav