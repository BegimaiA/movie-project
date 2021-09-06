import Movies from "./views/Movies";
import {BrowserRouter as Router, Route} from "react-router-dom"
import MovieDetails from "./views/MovieDetails";
import HomePage from "./views/Home";
import ActorDetails from "./views/ActorDetails";
import ActorsList from "./views/ActorsList";
import Header from "./components/Header";


function App() {
  return (
      <Router >
        <Header/>
        <div className="container" >
                <Route exact path="/"> <HomePage/>  </Route>
                <Route exact path="/movies"> <Movies /> </Route>
                <Route path="/movies/:id"> <MovieDetails /> </Route>
                <Route path="/actors/:id"> <ActorDetails /> </Route>
                <Route path="/cast/:id"> <ActorsList /> </Route>
        </div>
      </Router>
  );
}

export default App;
