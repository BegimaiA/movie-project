import Movies from "./views/movies/Movies";
import "./index.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import MovieDetails from "./views/MovieDetails/MovieDetails";
import HomePage from "./views/Home/HomePage";
import ActorDetails from "./views/Actors/ActorDetails";


function App() {
  return (
    <div className="container-fluid" >
     <Router >
         <Route exact path="/"> <HomePage/>  </Route>
       <Route exact path="/movies"> <Movies /> </Route>
       <Route path="/movies/:id"> <MovieDetails /> </Route>
       <Route path="/actors/:id"> <ActorDetails /> </Route>
     </Router>

    </div>
  );
}

export default App;
