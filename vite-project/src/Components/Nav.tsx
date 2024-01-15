import logo from '@/assets/Images/logo.png'
import flag from '@/assets/Images/flag.svg'
import profil from '@/assets/Images/profil.svg' 
import './Nav.css'  

function Nav() {

  return (
    <>
    <nav>
      <div><img src={logo} /></div>
      <div className ="nav-menu">
      <a href="#">Home</a>
      <a>Arrival / Stock on sale</a>
      <a>Market trends</a>
      <a>Forecast</a>
      <div>
        <img src={flag} />
        <img src={profil} />
      </div>
      </div>
    </nav>
    </>

  )
}

export default Nav