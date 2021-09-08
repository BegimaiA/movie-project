import React from 'react';

const Rating = ({rating}) => {
    return (
        <div className="rating">
            <i className={`fas fa-star ${rating > 0 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 1 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 2 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 3 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 4 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 5 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 6 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 7 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 8 && 'orange-star'}`}></i>
            <i className={`fas fa-star ${rating > 9 && 'orange-star'}`}></i>



        </div>
    );
};

export default Rating;