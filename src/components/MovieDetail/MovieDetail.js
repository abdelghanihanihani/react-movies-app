import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {
    selectedMovieOrSerieByImdbId,
    fetchMovieOrSerieByImdbId,
    removeSelectedMovieOrSerieByImdbId
} from "../../features/movies/moviesSlice";
import './MovieDetail.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faTh, faFilm, faCalendar} from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch()
    const data = useSelector(selectedMovieOrSerieByImdbId)
    console.log("selectedMovieOrSerieByImdbId0", data)
    useEffect(() => {
        console.log("selectedMovieOrSerieByImdbId1")

        dispatch(fetchMovieOrSerieByImdbId(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrSerieByImdbId())
        }
    }, [dispatch, imdbID]);

    return (
        <div className="section-details">
            <div className="details-text">
                <div className="details-title">{data.Title}</div>
                <div className="details-rating">
                    <span>IMDB Rating   <FontAwesomeIcon className="icon" icon={faStar}/> : {data.imdbRating}</span>
                    <span>IMDB Votes  <FontAwesomeIcon className="icon" icon={faTh}/> : {data.imdbVotes}</span>
                    <span>Runtime  <FontAwesomeIcon className="icon" icon={faFilm}/> : {data.Runtime}</span>
                    <span>Year  <FontAwesomeIcon className="icon" icon={faCalendar}/> : {data.Year}</span>
                </div>
                <div className="details-plot">{data.Plot}</div>
                <div className="details-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Actors</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Genre</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className="details-img"><img src={data.Poster} alt={data.Title}/></div>
        </div>
    );
};

export default MovieDetail;
