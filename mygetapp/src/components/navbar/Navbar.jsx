import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import NavIcon from "../images/NavIcon.svg"
import Close from "../images/Close.svg"

function NavBar({modal, setModal}) {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = (e) => {
        if(e.currentTarget.className === "open"){
            setMenuOpen(prev => true)
            return
        };
        if(e.currentTarget.className === "close"){
            setMenuOpen(prev => false)
        };
    }

  return (
    <nav style={{opacity: `${modal? '5%' : '100%'}`}}>
        <Link to="/" className="getlinked"><span className="get">get</span>linked</Link>
        <img className="open" src={NavIcon} alt="nav" onClick={handleClick}/>
        <div className={menuOpen? "menuActive" : "menu"}>
            <img className="close" src={Close} alt="X" onClick={handleClick}/>
            <div className="menuLinks">
                <a href="#timeline" className="links">Timeline</a>
                <a href="#overview" className="links">Overview</a>
                <a href="#faqs" className="links">FAQs</a>
                <NavLink to="/contact" className={({isActive}) => isActive? "contactActive" : "links"} >Contact</NavLink>
            </div>
            <NavLink to="/register" className={({isActive}) => isActive? "registerActive" : "register"}>Register</NavLink>
        </div>
    </nav>
  )
}

export default NavBar