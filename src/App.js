import react,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";


function App() {
  
  const [movies, setMovies] = useState([]);

  const [searchValue,setSearchValue] = useState('spider-man');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=22174a74`;
    
    const response = await fetch(url);

    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue])

  return (
    <div className='container-fluid movie-app'>
      <div className="heading">
        <MovieListHeading heading = 'Movies' />
        <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='movies-container'>
        <MovieList movies = {movies} />
      </div>
    </div>
  );
}

export default App;
