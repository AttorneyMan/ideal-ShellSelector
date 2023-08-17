import React from "react";
import { useState } from "react";


function ColorBattle(min, max) {
    const [count, setCount] = useState(0);
    min = Math.ceil(min);
    max = Math.floor(max);


    return (

        <>
            <div className="player1-counter">
                <button onClick={(se) => setCount(Math.floor(Math.random() = (max - min + 1) + min))} >
                    The count is {count}
                </button>




            </div >
        </>



    )

}

console.log(ColorBattle)

export default ColorBattle;

