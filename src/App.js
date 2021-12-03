import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import AppMovies from "./pages/AppMovies";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <div className="App">
      <Router>
         <MovieSearch />
        <nav>
          <ul>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;