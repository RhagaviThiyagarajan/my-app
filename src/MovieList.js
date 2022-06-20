import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Movie } from "./Movie";
import { useState } from "react";

export function MovieList({ movieList, setMovieList }) {


    const [name, setName] = useState("");


    const [rating, setRating] = useState("");

    const [poster, setPoster] = useState("");

    const [summary, setSummary] = useState("");

    //  const addMovie = () => {
        
        //  const newMovie = {
        //      name: { name },
        //      rating: { rating },
        //      poster: { poster },
        //      summary: { summary },
        //  };
        //  setMovieList([...movieList, newMovie]);
        //  console.log(newMovie);
       const addMovie=()=>
       {
        
            
            const newMovie = {
     name: { name },
     rating: { rating },
     poster: { poster },
     summary: { summary },
 };
    
    setMovieList([...movieList, newMovie]);
 console.log(newMovie);
       }
    return(
        <div>
            <div className="add-movie-form">

                <TextField label="Name"  variant="filled" onChange={(event) => setName(event.target.value)} />
                <TextField label="Rating" variant='filled' onChange={(event) => setRating(event.target.value)} />
                <TextField label="Poster" variant='filled'   onChange={(event) => setPoster(event.target.value)} />
                <TextField label="summary" variant="filled" onChange={(event) => setSummary(event.target.value)}/>
      
                <Button onClick= {addMovie} variant="outlined" >addMovie</Button>
        </div>


            <div className="movie-list">
                {movieList.map((mv, index,id) => (
                    <Movie key={index} movie={mv} id={index} />))}
            </div>
        </div>
    );
                };
