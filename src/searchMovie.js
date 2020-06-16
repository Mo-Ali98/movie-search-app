import React, {useState} from 'react';
//import { render } from '@testing-library/react';


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
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>

        <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div> 
        </>
    )
}


//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit