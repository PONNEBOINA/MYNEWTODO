import {Link} from "react-router-dom"
import "./index.css"

const Header = ()=>{
    return(
        <div className="navbar">
            <div className="homelinktodo">
                    <Link to="/Home" >TODO</Link>
            </div>

            <div className="links">

                <Link to="/Home" className="homelink">Home</Link>
                <Link to="/aboutUs" className="aboutlink">About Us</Link>
                <Link to="/signin"> <button type="button" className="buton" >SIGN OUT</button></Link>


            </div>
           

        </div>
    )
}
export default Header