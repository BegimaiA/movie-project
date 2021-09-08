import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from "../../components/Footer";

const ActorDetails = () => {
    const [actor, setActor] = useState({})
    const [acting, setActing] = useState([])
    const resultActing = acting.filter(el => el.release_date).sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
    const resultActingUnordered = acting.filter(el => !el.release_date)
    const resultKnownfor = acting.sort((a, b) => b.popularity - a.popularity)
    const resultBirthday = Object.values(actor).sort((a, b)=> new Date(a) - new Date(b))
    console.log(resultBirthday)
    const params = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${params.id}?api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US`)
            .then(res => setActor(res.data))
        axios(`https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US`)
            .then(res => setActing(res.data.cast))

    }, [])

    return (
        <>
        <div className=" container movie-section">
            <div className="row mt-5">
                <div className="col-md-5">
                    <img src={`https://www.themoviedb.org/t/p/w1280/${actor.profile_path}`} width={400} className="mb-4" alt=""/>
                    <h6 className="actor-desc">Date of birth: {actor.birthday}</h6>
                    <h6 className="actor-desc">Place of birth: {actor.place_of_birth}</h6>
                    <h6 className="actor-desc">Gender: {actor.gender === 1 ? "Female" : actor.gender === 2 ? "Male" : "Undefined"}</h6>
                    <h6 className="actor-desc">Known for: {actor.known_for_department}</h6>
                    <h6 className="actor-desc">Also Known as: {actor.also_known_as?.map(el => <p>{el}</p>)}</h6>
                </div>
                <div className="col-md-7">
                    <h4 className="actors-title">Biography</h4>
                    <p className="actor-desc">{actor.biography}</p>
                    <OwlCarousel className='owl-theme' loop margin={10} dots={false} items={4}>
                        {
                            resultKnownfor.slice(0, 6)?.map(el =>
                                <div key={el.id}>
                                    <img src={`https://www.themoviedb.org/t/p/w1280/${el.backdrop_path}`} alt=""/>
                                    <h6 className="actor-desc">{el.original_title}</h6>
                                </div>
                            )}
                    </OwlCarousel>
                    <h5 className="actor-desc">Acting:</h5>

                       {
                           resultActingUnordered.map(el=>
                               <div className="d-flex" key={el.id}>
                                       <h6 className="actor-desc me-5">---</h6>
                                       <Link to={`/${el.id}`}>
                                           <h6 className="actor-desc mx-3">{el.title}</h6>
                                       </Link>
                               </div>
                           )}
                       {
                           resultActing.map(el =>
                               <div className="d-flex">
                                       <h6 className="actor-desc me-5">{el.release_date.slice(0, 4)}</h6>
                                       <Link to={`/${el.id}`}>
                                           <h6 className="actor-desc">{el.title}</h6>
                                       </Link>
                               </div>
                           )}

                </div>
            </div>
        </div>
            </>
    );
};

export default ActorDetails;