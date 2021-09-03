import React from 'react';
import Header from "../../components/Header/Header";


const HomePage = () => {
    return (
        <div>
            <Header />
           <h1 className="homePage-title">Welcome</h1>
            <p className="homePage-desc">Millions of movies to discover. Explore now</p>


        </div>
    );
};

export default HomePage;