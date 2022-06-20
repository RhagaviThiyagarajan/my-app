import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddColor } from "./AddColor";
import { Counter } from "./Counter";

import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export function Movie({ movie,id }) {
    const [show, setShow] = useState(true);
    const paraStyles = {
        display: show ? "block" : "none",

    };
    const styles = {
       color: "movie.rating" > 8 ? "green" : "red",
        fontSize: "30px",
    };
    //conditional rendering
    // const styles={
    //     color:"movie.rating">8? "green" :"red",
    //     fontSize:"30px",

    const navigate=useNavigate();

    return (
        <div className='movie-container'>
            <img src={movie.poster} alt={movie.name} className="movie-poster" />

            <div className='movie-specs'>
                <h2 className='movie-name'>{movie.name}<IconButton color="primary"  onClick={() => setShow(!show)} aria-label="Movie details">
           {show} ?<ExpandMoreIcon />:<ExpandLessIcon>

            </ExpandLessIcon>
            </IconButton></h2>
            
            <IconButton color="primary" onClick={()=>navigate(`/movies/${id}`)} aria-label="Movie details">
            <InfoIcon />
         

            {show ? <p className='movie-summary'>{movie.summary}</p> : null}
            </IconButton>

                <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
            </div>
           

          
            <Counter />
            <AddColor />
        </div>
    );
    };

  