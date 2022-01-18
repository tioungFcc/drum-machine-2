import React from "react"
import Pad from "./Pad"
import soundBank from "./data"

export default function Pads({power, volume, setDisplay}){
    const pads=soundBank.map(item=><Pad
        key={item.letter}
        letter={item.letter}
        url={item.url}
        description={item.description}
        power={power}
        volume={volume}
        setDisplay={setDisplay}

    />)
    return(
        <div className="pads">
            {pads}
        </div>
    )
}