import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const MovieDetails = () => {
    const [film, setFilm] = useState({})
    const [actors, setActors] = useState([])
    const [visible, setVisible] = useState(10)
    const [crew, setCrew] = useState([])
    const params = useParams()

    useEffect(() => {
        console.log(params.id)
        axios(`https://api.themoviedb.org/3/movie/${params.id}?&language=en-US&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => setFilm(res.data))

        axios(`https://api.themoviedb.org/3/movie/${params.id}/credits?&language=en-US&page=1&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => setActors(res.data.cast))
        axios(`https://api.themoviedb.org/3/movie/${params.id}/credits?&language=en-US&page=1&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => setCrew(res.data.crew))

    }, [params.id])

const showMoreItems =() => {
setVisible((prevValue) => prevValue + 10)
}

    return (
        <div className="movieDetails-section">
            <div className="row">
                <div className="col-md-5">
                    <img className="movieDetails-img"
                         src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${film.poster_path}`} alt=""/>
                </div>
                <div className="col-md-7">
                    <h2 className="movieDetails-title">{film.title}</h2>
                    {
                        film.genres?.map(el=>
                        <span className="mx-2 text-white my-3">{el.name}</span>
                        )
                    }
                    <h5 className="movieDetails-title">{film.tagline}</h5>
                    <h4 className="movieDetails-title">Overview:</h4>
                    <p className="movie-desc">{film.overview}</p>
                    <p className="movie-desc">Original language: {film.original_language}</p>
                    <p className="movie-desc">Budget: $ {film.budget?.toLocaleString()}</p>
                    <p className="movie-desc">Revenue: $ {film.revenue?.toLocaleString()}</p>
                    <p className="movie-desc">Release date: {film.release_date}</p>
                    <p className="movie-desc">Runtime: {Math.floor(film.runtime / 60)}h. {film.runtime % 60} min.</p>
                </div>
            </div>
            <div className="row">
                <h2 className="movieDetails-title">Top-billed cast:</h2>
                {
                    actors.slice(0, visible).map(el =>
                        <div className="col-md-2">
                            <Link to={`/actors/${el.id}`}>
                                {
                                    el.profile_path === null ? <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKWZWjdveWsV0r5IOtdTPxqoCVvgCzr82MA&usqp=CAU"
                                            height="330" alt=""/>
                                        :
                                        <img className="actors-img"
                                             src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.profile_path}`}
                                             alt=""/>
                                }
                                <h6 className="actors-title">{el.name}</h6>
                                <h6 className="actors-title">{el.character}</h6>
                            </Link>
                        </div>
                    )}
            </div>
            <button className=" btn btn-primary me-2 my-3 text-white text-center" onClick={showMoreItems}>View more</button>
        </div>
    );
};

export default MovieDetails;