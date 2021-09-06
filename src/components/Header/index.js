import React from 'react';
import {Link} from "react-router-dom";
import SearchBtn from "../SearchBtn";

const Header = () => {

    return (
        <div className="header">
           <nav className="nav">
               <i className="fas fa-film"></i>
               <Link to="/" className="header-link"> Home </Link>
               <Link to="/movies"  className="header-link"> View Movies </Link>
               <SearchBtn />
           </nav>

            
        </div>
    );
};

export default Header;