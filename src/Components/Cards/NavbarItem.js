import { Link  } from "react-router-dom";

function NavbarItem({name, icon, link}){
    return(		
    <li className="nav-item">
    <Link className="nav-link" to={link}>
        <i className={icon}></i>
        <span>{name}</span></Link>
    </li>
    )
}

export default NavbarItem;