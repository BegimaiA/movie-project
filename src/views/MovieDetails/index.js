import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Spinner from "../../components/Spinner";
import Trailers from "../../components/Trailers";
import {language} from "../../components/Language";

const MovieDetails = () => {
    const [film, setFilm] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [actorsLoading, setActorsLoading] = useState(true)
    const [actors, setActors] = useState([])
    const [trailers, setTrailers] = useState([])
    const [visible, setVisible] = useState(6)
    const params = useParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${params.id}?&language=en-US&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => {
                setFilm(res.data)
                setIsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${params.id}/credits?&language=en-US&page=1&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => {
                setActors(res.data.cast)
                setActorsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US`)
            .then(res => setTrailers(res.data.results))

    }, [params.id])

    // const showMoreItems = () => {
    //     setVisible((prevValue) => prevValue + 10)
    // }

    if (isLoading && actorsLoading) {
        return <Spinner/>
    }
    return (
        <>
            <div className="movieDetails-section" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original/${film.backdrop_path})`}} >
                <div className="container">
                    <div className="row minus-row" >
                        <div className="col-md-5">
                            <img className="movieDetails-img"
                                 src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${film.poster_path}`} alt=""/>

                        </div>
                        <div className="col-md-7">
                            <h3 className="movieDetails-title"> {film.title} </h3>
                            {film.genres?.map(el =>
                                <span className="mx-2 text-white my-3">{el.name}</span>
                            )}
                            <h5 className="movieDetails-title">{film.tagline}</h5>
                            <p className="movieDetails-title">Overview:</p>
                            <p className="movie-desc">{film.overview}</p>
                            <p className="movie-desc">Original language: {language[film.original_language]}</p>
                               <span className="movie-desc">Budget: $ {film.budget?.toLocaleString()}</span>
                               <span className="movie-desc mx-4 ">Revenue: $ {film.revenue?.toLocaleString()}</span>
                            <p className="movie-desc">Release date: {film.release_date}</p>
                            <p className="movie-desc">Runtime: {Math.floor(film.runtime / 60)}h. {film.runtime % 60} min.</p>
                            <h5 className="movie-desc">Страны:</h5>
                            {
                                film.production_countries?.map(country =>
                                    <div key={country.id} className="movie-desc">{country.name}</div>)
                            }

                        </div>
                    </div>
                    <OwlCarousel className='owl-theme mt-5' loop margin={10} dots={false} items={7}>
                        {
                            actors?.slice(0, visible).map(el =>
                                <Link to={`/actors/${el.id}`} key={el.id}>
                                    {
                                        el.profile_path === null ? <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKWZWjdveWsV0r5IOtdTPxqoCVvgCzr82MA&usqp=CAU"
                                                alt=""/>
                                            :
                                            <img className="actors-img"
                                                 src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.profile_path}`}
                                                 alt=""/>
                                    }
                                    <h6 className="actors-title mt-3">{el.name}</h6>
                                    <h6 className="actors-title">{el.character}</h6>
                                </Link>
                            )}
                        {
                            <Link to={`/cast/${params.id}`} className="view-more">
                                View more  <span> <i className="fas fa-arrow-right"></i> </span>
                            </Link>
                        }
                        {/*<button className=" btn btn-primary me-2 my-3 text-white text-center" onClick={showMoreItems}>View more</button>*/}
                    </OwlCarousel>
                    {
                        trailers.map(el=>
                            <Trailers key={el.key} id={el.key}/>)
                    }
                </div>

            </div>

        </>
    );
};
export default MovieDetails;