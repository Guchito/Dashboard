import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/pepito">
                  <p>pepito</p>
                </Route>
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
