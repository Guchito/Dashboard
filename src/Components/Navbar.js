import NavbarItem from './Cards/NavbarItem'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Navbar(){

    return(
        <Router>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin</div>
                </Link>


                <hr className="sidebar-divider my-0"></hr>


                <NavbarItem 
                    name="Dashboard"
                    icon="fas fa-fw fa-tachometer-alt"
                    link="/"
                />


                <hr className="sidebar-divider"></hr>


                <div className="sidebar-heading">Actions</div>

                <NavbarItem 
                    name="Pages"
                    icon="fas fa-fw fa-folder"
                    link="/"
                />


                <NavbarItem 
                    name="Charts"
                    icon="fas fa-fw fa-chart-area"
                    link="/"
                />

                <NavbarItem 
                    name="Tables"
                    icon="fas fa-fw fa-table"
                    link="/"
                />


                <hr className="sidebar-divider d-none d-md-block"></hr>
            </ul>
        </Router>
    )
}

export default Navbar;