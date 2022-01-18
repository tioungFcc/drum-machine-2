import React from "react"

export default function Dashboard({power, setPower, volume, setVolume, display}){
    function handleChange(e){
        setVolume(e.target.value)
    }
    function handleClick(){
        setPower(prevState=>!prevState)
    }
    return(
        <div className="flex dashboard">
            <div className="power__wrapper" onClick={handleClick}>
                <button className={`power__button ${power? "":"slide__button"}`}>{power? "ON" : "OFF"}</button>
            </div>

            <button className="display__wrapper">{display}</button>

            <div className="volume__wrapper">
                <input type="range" id="volume__control" value={volume} onChange={handleChange}/>
            </div>
        </div>
    )
}