import React from 'react';
//import { render } from '@testing-library/react';


export default function SearchMovies(){
    
    //API movie request
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const query = "Jurassic Park";
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b097657f6fb5d9c1066fa666bf592267&language=en-US&query=${query}&page=1&include_adult=true`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}


//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit