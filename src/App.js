import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import './App.css';



function App() {
  return (
    <div id="wrapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          <Dashboard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
