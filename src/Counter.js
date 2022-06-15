import { useState } from "react";
import App from "./App";

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
    return (
        <div className='counters-container'>
            <button className='like-button' onClick={() => setLike(like + 1)}>
                {like}👍
            </button>

            <button className='dislike-button' onClick={() => setDisLike(dislike + 1)}>
                {dislike}👎
            </button>
        </div>


    );
}
