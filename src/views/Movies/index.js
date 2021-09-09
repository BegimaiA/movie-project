import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Spinner from "../../components/Spinner";
import Rating from "../../components/Rating";

const Movies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const handleClick = (pageNumber) => {
        setPage(pageNumber)
    }

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => {
                setMovies(res.data.results)
                setLoading(false)
            })

    }, [page])

    if (loading) {
        return <Spinner/>
    }

    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} dots={false} autoplay={true} items={1}>
                {
                    movies.map(el =>
                        <div key={el.id} className="movieDetails-section" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original/${el.backdrop_path})`}}>
                            <Link to={`/${el.id}`}>
                                <div className="container">
                                    <div className="row minus-row" >
                                        <div className="col-md-4 col-sm-6 mt-3">
                                            <img className="movieCarousel-img" width={100} height={500}
                                                 src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt=""/>
                                        </div>
                                        <div className="col-md-5 col-sm-5 mt-3">
                                            <h2 className="mt-3">{el.original_title}</h2>
                                            <p className="mt-3">{el.overview}</p>
                                            <p className="">Rating: {el.vote_average}</p>
                                            <Rating rating={el.vote_average}/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

            </OwlCarousel>
            <div className="movie-section container">
                {[...Array(6).keys()].map((el) =>
                    <button key={el}
                            className={`btn btn-primary me-2 my-3 ${page === el + 1 && "btn-info text-white"} `}
                            type="button" onClick={() => handleClick(el + 1)}>{el + 1} </button>
                )}
                <h2 className="text-white mb-2">Popular movies</h2>
                <div className="row">
                    {
                        movies.map(el =>
                            <div key={el.id} className="col-md-3 col-sm-6">
                                <Link to={`/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`}
                                   className="movie-img"      alt=""/>
                                    <h5 className="mt-3">{el.original_title}</h5>
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Movies;