import React, {useEffect} from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MoviesList.css'
import profile from '../../assets/profile.png';
import {useDispatch, useSelector} from "react-redux";
import {APiKey} from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";
import {getAllMovies, getAllSeries, setAllMovies} from "../../features/movies/moviesSlice";

const MoviesList = () => {
    const movies = useSelector(getAllMovies)
    const series = useSelector(getAllSeries)
    console.log("movies", movies)
    console.log("series", series)
    let moviesList = "";
    moviesList = movies.Response === "True" ? (movies.Search.map((movie, index) =>
            <MovieCard key={index} data={movie}/>)
    ) : (<div className="error"><h3>{movies.Error}</h3></div>);
    let seriesList = "";
    seriesList = series.Response === "True" ? (series.Search.map((movie, index) =>
            <MovieCard key={index} data={movie}/>)
    ) : (<div className="error"><h3>{series.Error}</h3></div>);


    return (
        <div>
            <div className="wrapper">
                <div className="type">Movies :</div>
                <div className="list">
                    {moviesList}
                </div>
            </div>
            <div className="wrapper">
                <div className="type">Shows :</div>
                <div className="list">
                    {seriesList}
                </div>
            </div>
        </div>

    );
};

export default MoviesList;
