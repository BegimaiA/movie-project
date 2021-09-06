import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Search = () => {
    const [film, setFilm] = useState([])
    const [error, setError] = useState("")
    const params= useParams()

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/search/multi?query=${params.name}?&api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US&page=1&include_adult=false`)
            .then(res=>res.data.results? setFilm(res.data.results) : setError("Not found"))
    },[params.name])


    return (
        <div>
            { error ? <h2>{error}</h2> :
                film.map(el=>
                    <div className="d-flex movie-card mt-5 p-1">
                      <div className="wrapper">
                          <div className="image">
                                 <img
                                     src={
                                         el.poster_path ?
                                             `https://www.themoviedb.org/t/p/w100_and_h100_bestv2/${el.poster_path}`
                                             : "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
                                     }
                                     alt=""/>
                          </div>
                          <div className="search-result-box mx-3">
                              <h5 className="ml-3">{el.title}</h5>
                              <span>{el.release_date}</span>
                              <p>{el.overview}</p>
                          </div>
                      </div>
                    </div>
                )
            }
        </div>
    );
};

export default Search;