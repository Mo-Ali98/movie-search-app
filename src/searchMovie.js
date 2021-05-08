import React, {useState} from 'react';
//import { render } from '@testing-library/react';

//import movieCard component
import MovieCard from './movieCard.js';

export default function SearchMovies(){
    
    //Sates for user input query
    const[query, setQuery] = useState('');

    //State for movies when query updates
    const [movies, setMovies] = useState([]);

    //API movie request
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
     
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b097657f6fb5d9c1066fa666bf592267&language=en-US&query=${query}&page=1&include_adult=true`;
        
        //try-catch statement if error occurs from API call 
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }
    //Render the HTML Form and Movies
    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" required name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>

        <div className="card-list">
                {movies.length > 0 ? (
                    movies.filter(movie => movie.poster_path).map(movie => (
                        //Pass the movie propery to the MovieCard component
                        <MovieCard movie={movie} key={movie.id}/>
                ))
                 ) : (
                        <div>Movie does not exist. Try again</div>
                )}

            </div> 
        </>
    )
}


//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit