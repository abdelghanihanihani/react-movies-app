import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <div>
                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/movies/:imdbID" exact element={<MovieDetail/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
