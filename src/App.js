import Movies from "./views/Movies";
import {BrowserRouter as Router, Route} from "react-router-dom"
import MovieDetails from "./views/MovieDetails";
import HomePage from "./views/Home";
import ActorDetails from "./views/ActorDetails";
import ActorsList from "./views/ActorsList";
import Header from "./components/Header";
import Search from "./views/SearchResult"
// import Footer from "./components/Footer";
import "./index.scss"


function App() {
  return (
            <Router >
                <Header/>
                <div className="App">
                    <Route exact path="/"><Movies />  </Route>
                    {/*<Route exact path="/movies"><Movies/>  </Route>*/}
                    <Route exact path="/:id"> <MovieDetails /> </Route>
                    <Route exact path="/actors/:id"> <ActorDetails /> </Route>
                    <Route exact path="/cast/:id"> <ActorsList /> </Route>
                    <Route path="/search/:name"> <Search/> </Route>
                </div>
                {/*<Footer/>*/}
            </Router>

  );
}

export default App;
