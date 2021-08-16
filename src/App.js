import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services"
import Contact from "./components/Contact";
import About from "./components/About";
import Vehicles from "./components/Vehicles";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Hero/>
            </Route>
            <Route exact path="/services">
              <Services/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/vehicles/:id">
              <Vehicles/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
