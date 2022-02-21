import React from 'react';
import profile from '../../assets/profile.png';
import './MovieCard.css'
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    const {data} = props;
    return (
        <Link to={`/movies/${data.imdbID}`}>
            <div className="movie-card">
                <div className="movie-img-top"><img src={data.Poster} alt="Card image cap"/></div>
                <div className="movie-card-body">
                    <h5 className="movie-title">{data.Title}</h5>
                    <p className="movie-text">{data.Year}</p>
                </div>

            </div>
        </Link>

    );
};

export default MovieCard;
