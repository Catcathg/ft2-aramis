import "./ProfilePage.css"
import Nav from "./Nav"

export default function ProfilePage(){
    return(
        <>
        <Nav />
        <div className="Content">
            <p>Do you want to make changes ?</p>
            <h1 className="TextProfile">Profile</h1>
            <div className="profileContainer">
                <p className="Name"> Baptiste Legrand</p>
                <p className="Information">
                Email 
                Type 
                Pôle</p>
            </div>
         </div>
        </>
    )
}