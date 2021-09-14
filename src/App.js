import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PropertyListings from "PropertyListings";

const Home = () => <>
  <nav role="navigation">
    Home
  </nav>
  <section>Visit our <Link to="/property-listings">property listings</Link></section>
</>

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/property-listings">
          <PropertyListings />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
