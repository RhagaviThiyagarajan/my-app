import { Navigate, useParams,useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

export function MovieDetails({ movieList }) {
    const { movieId } = useParams();
    console.log(movieId);
    console.log(movieList[movieId]);
    const movie = movieList[movieId];


    const styles = {
        color: "movie.rating" > 8 ? "green" : "red",
        fontSize: "30px",
    };
    const Navigate=useNavigate();

    return (
        <div>

            <iframe
                width="100%"
                height="808"
                src={movie.trailer}
                title="Baahubali 2 - The Conclusion | Official Trailer (Hindi) | S.S. Rajamouli | Prabhas | Rana Daggubati"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>

            </iframe>

            <div className="movie-detail-container">
                <div className="movie-specs">
                    <h2 className="movie-name">{movie.name}</h2>
                    <p style={styles} className="movie-rating">{movie.rating}
                    </p>
                </div>
                <p className="movie-summary">{movie.summary}</p>
                {/* <button onClick={() => (Navigate(-1))}>Back</button> */}
                
                <button onClick={()=>(Navigate(-1))} variant="outlined">Back</button>
                
            </div>
        </div>
    );
}
