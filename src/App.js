import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Products from './Components/Products';
import NavbarItem from './Components/Cards/NavbarItem'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <div id="wrapper">
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
          name=" Users"
          icon="fas fa-users"
          link="/users"
      />

      <NavbarItem 
          name=" Products"
          icon="fas fa-wine-glass-alt"
          link="/products"
      />

      <hr className="sidebar-divider d-none d-md-block"></hr>
      </ul>
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Header />
                <div className="container-fluid">
                  <Switch>
                    <Route exact path="/" >
                      <Dashboard />
                    </Route>
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/products" component={Products} />
                  </Switch>
                </div>
              </div>
              <Footer />
            </div>
        </div>
    </Router>
  );
}

export default App;
