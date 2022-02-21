import React, {useEffect} from 'react';

import MoviesList from "../MoviesList/MoviesList";
import {fetchAllMovies, fetchAllSeries} from "../../features/movies/moviesSlice";
import {useDispatch} from "react-redux";
import './Home.css'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Home = () => {
    const dispatch = useDispatch()
    let textToSearch = "";
    const handleSearch = () => {
        dispatch(fetchAllMovies(textToSearch));
        dispatch(fetchAllSeries(textToSearch));
    }
    const handleChange = (event) => {
        textToSearch = event.target.value;
    }
    // useEffect(() => {
    //     dispatch(fetchAllMovies(textToSearch));
    //     dispatch(fetchAllSeries(textToSearch));
    // }, [dispatch]);

    return (
        <div className="container">
            <div className="search">
                <input type="text" placeholder="Search" onChange={handleChange}/>
                <button name="search button" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>

            <MoviesList/>
        </div>
    );
};

export default Home;
