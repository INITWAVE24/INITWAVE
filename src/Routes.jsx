import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import { ScrollRestoration } from 'react-router-dom';
function Route() {
  return (
    <Router>
      <div>
      <ScrollRestoration/>

        <Navbar />
        <Switch>
          <Route path="about" component={About} />
          <Route path="services" component={Services} />
          <Route path="contact" component={Contact} />
          <Route path="" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default Route;
