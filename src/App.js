import Movies from "./views/movies/Movies";
import "./index.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import MovieDetails from "./views/MovieDetails/MovieDetails";


function App() {
  return (
    <div className="container" >
     <Router >
       <Route exact path="/movies"> <Movies /> </Route>
       <Route path="/movies/:id"> <MovieDetails /> </Route>
     </Router>

    </div>
  );
}

export default App;
