import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom"
import axios from "axios"


const Movies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const[currentPage, setCurrentPage] = useState("")

    const handleClick =(pageNumber) => {
                setPage(pageNumber)
    }


    useEffect(()=> {
        axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res=>setMovies(res.data.results))

    }, [page])

    return (
       <div>
           { [...Array(6).keys()].map((el)=>
               <button key={el}  className="btn" type="button"  onClick={()=>handleClick(el+1)}>{el +1}</button>
           )}
           <div className="row">
               {
                   movies.map(el=>
                         <div key={el.id}  className="col-3">
                             <Link to={`/movies/${el.id}`} >
                             <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt=""/>
                             <h3>{el.original_title}</h3>
                     </Link>
                         </div>
                   )
               }

           </div>

       </div>
    );
};

export default Movies;