import react from "react";
import "./MovieList.css"

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie,index) => (
            <div className="MovieApp">
                <div
                ><p className="title">{movie.Title}</p>
                </div>
                <div>
                    <img src={movie.Poster} alt="movieimage"></img>
                </div>
                <div>
                    <p className="release_date">Release Date: {movie.Year}</p>
                </div>
            </div>
            ))}
        </>
    );
};

export default MovieList;