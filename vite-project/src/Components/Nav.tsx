import logo from '@/assets/Images/logo.png'
import flag from '@/assets/Images/flag.svg'
import profil from '@/assets/Images/profil.svg'
import chevron from '@/assets/Images/chevron.svg'
import './Nav.css'

function Nav() {

  return (
    <>
      <nav>
        <div className="logo"><img src={logo} /></div>
        <div className="nav-menu">
          <div className="button">
            <img src={flag} />
            <p>English</p>
            <img className="chevron" src={chevron}/>
          </div>
          <div className="profil"><img src={profil} /></div>
        </div>
      </nav>
    </>

  )
}

export default Nav