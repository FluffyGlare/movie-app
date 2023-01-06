import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title,year,summary,poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt="poster"/>
            <div className="movie__description">
                <h3 className="movie__title">{title}</h3>            
                <h5 className="movie__year">{year}</h5>
                <p>{genres.map((genre,index) => {
                    return (
                        <li key={index} className="genres__item">{genre}</li>
                    )
                })}</p>
                <p className="movie__summary">{summary}</p>
            </div>            
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;