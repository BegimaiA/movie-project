import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Spinner from "../../components/Spinner";

const Search = () => {
    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const params= useParams()

    useEffect(()=> {
        axios(`https://api.themoviedb.org/3/search/movie?query=${params.name}?&api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US&page=${page}&include_adult=false`)
            .then(res=> {
                setFilm(res.data)
                setLoading(false)
                })
    },[params.name, page])

    let pageButtons = ""
    if (film.total_pages > 1 && page ===1) {
        pageButtons = (<button className="page-btn btn-primary mt-4  mb-3 text-center" onClick={()=> setPage(page+1)} > Next <i className="fas fa-chevron-right"></i>   </button>)
   window.scrollTo(0, 0)
    } else if (film.total_pages > page && page > 1){
        pageButtons = (<div>
          <button className="page-btn btn-primary mt-4 mb-3 mx-2 text-center" onClick={()=> setPage(page-1)}>  <i className="fas fa-chevron-left"></i> Previous </button>
          <button  className="page-btn btn-primary mt-4  mb-3 mx-2 text-center" onClick={()=> setPage(page+1)}> Next <i className="fas fa-chevron-right"></i>   </button>
        </div>)
        window.scrollTo(0, 0)
    } else if (film.total_pages === page && page!==1) {
        pageButtons = (<button className="page-btn btn-primary  mb-3 mt-4 text-center"  onClick={()=> setPage(page-1)}> <i className="fas fa-chevron-left"></i>Previous</button>)
        window.scrollTo(0, 0)
    }

    if (loading) {
        return <Spinner/>
    }
    return (
        <div className="container movie-section">
            {  film.results.length?          film.results.map(el=>
                    <div key={el.id} className="d-flex movie-card mt-3">
                      <div className="wrapper">
                          <div className="image">
                                 <img
                                     src={
                                         el.poster_path ?
                                             `https://www.themoviedb.org/t/p/w100_and_h100_bestv2/${el.poster_path}`
                                             : "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
                                     }
                                      className="search-img" alt=""/>
                          </div>
                          <div className="search-result-box mx-3">
                              <h5 className="mt-3">{el.title}</h5>
                              <span>{el.release_date}</span>
                              <p >{el.overview.length > 200 ? `${el.overview.substring(0, 250)}...` : el.overview }</p>
                          </div>
                      </div>
                    </div>
            )
                : <h1 className="mt-5 pt-5 text-center text-white">Result not found</h1>
            }
           <div className="btn-wrapper">
               {pageButtons}
           </div>
        </div>
    );
};

export default Search;