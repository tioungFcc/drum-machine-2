import React, {useState} from "react"
import Pads from "./Pads"
import Dashboard from "./Dashboard"
import { useEffect } from "react/cjs/react.development"

export default function App(){
    const [volume, setVolume] = useState(30)
    const [display, setDisplay] = useState("sound")
    const [power, setPower] = useState(true)
    return(
        <div className="app">
            <Pads power={power} volume={volume} setDisplay={setDisplay} />
            <Dashboard power={power} setPower={setPower} volume={volume} setVolume={setVolume} display={display}/>
        </div>
    )
}