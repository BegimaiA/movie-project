import React, {useState, useEffect} from 'react';
import axios from "axios"
const Movies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const[currentPage, setCurrentPage] = useState("")

    useEffect(()=> {
        axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=ff9e9d0130b0f3c796f426d2bd9285c3`)
            .then(res=>setMovies(res.data.results))

    }, [page])

    return (
        <div className="row">
            {
                movies.slice(currentPage *20, (currentPage*20) +20).map(el=>
               <div key={el.id}  className="col-3">
                   <h3>{el.original_title}</h3>
                   <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt=""/>
               </div>
                )
            }

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    { Array(10).fill(0).map((el, idx)=>
                        <li className="page-item" onClick={()=>setCurrentPage(idx)}>{idx +1}</li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Movies;