import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const MovieDetails = () => {
    const [film, setFilm] = useState({})
    const [actors, setActors] = useState([])
    const params = useParams()

    useEffect(() => {
        console.log(params.id)
        axios(`https://api.themoviedb.org/3/movie/${params.id}?&language=en-US&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => setFilm(res.data))

        axios(`https://api.themoviedb.org/3/movie/${params.id}/credits?&language=en-US&page=1&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => setActors(res.data.cast))


    }, [params.id])


    return (
        <div>
            <div className="row">
                <div className="col-5">
                    <img className="movieDetails-img"
                         src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${film.poster_path}`} alt=""/>
                </div>
                <div className="col-7">
                    <h2 className="movieDetails-title">{film.title}</h2>
                    <h5 className="movieDetails-title">{film.tagline}</h5>
                    <h4 className="movieDetails-title">Overview:</h4>
                    <p className="movie-desc">{film.overview}</p>
                    <p className="movie-desc">Runtime: {film.runtime} min.</p>
                </div>
            </div>
            <div className="row">
                <h2 className="movieDetails-title">Top-billed cast:</h2>
                {
                    actors.map(el =>
                        <div className="col-2">
                            <h6 className="actors-title">{el.name}</h6>
                            {
                                el.profile_path === null ? <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKWZWjdveWsV0r5IOtdTPxqoCVvgCzr82MA&usqp=CAU"
                                      height="330"  alt=""/>
                                                    :
                                    <img className="actors-img"
                                         src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.profile_path}`}
                                         alt=""/>
                            }
                        </div>
                    )}
            </div>

        </div>
    );
};

export default MovieDetails;