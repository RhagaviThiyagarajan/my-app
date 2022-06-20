import { useState } from "react";
import App from "./App";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { IconButton } from "@mui/material";


//hook-make hook listen to the change.
//hook-function
// start with the word called use
//setState is again a func-to change.To upgrade the state.
//informing react that state is changed.
//useState-informing react that state is changed.
//state-currentValue 
export function Counter() {

    const [like, setLike] = useState(0);
    const [dislike, setDisLike] = useState(0);
    //state-current scenario
    //onClick-Camel Case
    const incrementLike=()=>setLike(like + 1);
    const decrementLike=()=>setDisLike(dislike+1);
    return (
        <div className='counters-container'>

           


            <IconButton
            className="like-button"
             color="primary" 
             onClick={incrementLike}
            aria-label="Movie details">
                 <Badge badgeContent={like} color="primary">
           👍
           </Badge>
           👍
         </IconButton>

         <IconButton
             color="error" 
            className="dislike-button"
             onClick={decrementLike}
            aria-label="Movie details">
                 <Badge badgeContent={dislike} color="error">
                👎
           </Badge>
        👎
          
         </IconButton>

           


           
        </div>


    );
}
