import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const ActorsList = () => {
    const [film, setFilm] = useState({})
    const [actorsList, setActorsList] = useState([])
    const params = useParams()

    useEffect(()=> {
        axios(`https://api.themoviedb.org/3/movie/${params.id}?&language=en-US&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res => {
                setFilm(res.data)

                axios(`https://api.themoviedb.org/3/movie/${params.id}/credits?&language=en-US&page=1&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
                    .then(res => setActorsList(res.data.cast))
            })
    },[params.id])

    return (
      <div className="container">
          <div className="row mt-5 movie-section">
              {
                  actorsList?.map(el =>
                      <Link to={`/actors/${el.id}`} className="col-2 mt-4">
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
          </div>
      </div>
    )};


export default ActorsList;