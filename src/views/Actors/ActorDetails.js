import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"

const ActorDetails = () => {
    const [actor, setActor] = useState({})
    const params = useParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${params.id}?api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US`)
            .then(res => setActor(res.data))
    }, [])


    return (
       <div className="movieDetails-section">
           <div className="row">
               <div className="col-5">
                   <img src={`https://www.themoviedb.org/t/p/w1280/${actor.profile_path}`} alt=""/>
               </div>
               <div className="col-7">
                   <h4 className="actors-title">Biography</h4>
                   <p className="actor-desc">{actor.biography}</p>
                   <h6 className="actor-desc">Date of birth: {actor.birthday}</h6>
                   <h6 className="actor-desc">Place of birth: {actor.place_of_birth}</h6>
               </div>
           </div>
       </div>
    );
};

export default ActorDetails;