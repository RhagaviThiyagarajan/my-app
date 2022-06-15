import { useState } from "react";
import { AddColor } from "./AddColor";
import { Counter } from "./Counter";

export function Movie({ movie }) {
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
    return (
        <div className='movie-container'>
            <img src={movie.poster} alt={movie.name} className="movie-poster" />

            <div className='movie-specs'>
                <h2 className='movie-name'>{movie.name}</h2>
                <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
            </div>
            <button onClick={() => setShow(!show)} className="">Toggle-summary</button>

            {show ? <p className='movie-summary'>{movie.summary}</p> : null}

            <Counter />
            <AddColor />
        </div>
    );

}
