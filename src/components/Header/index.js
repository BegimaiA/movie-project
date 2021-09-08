import React from 'react';
import {Link} from "react-router-dom";
import SearchBtn from "../SearchBtn";




const Header = () => {

    return (

       <div className="home-section " >
           <div className="header">
               <nav className="nav">
                   <i className="fas fa-film"></i>
                   <Link to="/" className="header-link"> Home </Link>
                   <Link to="/movies"  className="header-link"> View Movies </Link>
                   <SearchBtn />
                   <div className="home-section" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/qJxzjUjCpTPvDHldNnlbRC4OqEh.jpg)`}}></div>
               </nav>
           </div>
       </div>
    );
};

export default Header;