import React, {useEffect}from "react"

export default function Pad({letter, url, power, volume, description, setDisplay}){
    function playClip(e){
        if(power){
            setDisplay(description)
            const clip=document.querySelector("audio#"+letter)
            clip.currentTime=0
            clip.volume=volume/100
            clip.play()
        }
    }
    function playIfMatched(e){
        if(e.key.toUpperCase()===letter)playClip()
    }
    useEffect(()=>{
        console.log("added event listener")
        document.addEventListener("keypress",playIfMatched)
        return ()=>{
            document.removeEventListener("keypress",playIfMatched)
            console.log("removed event listener")
        }
    },[power, volume])
    return(
        <div className="flex pad" onClick={playClip}>
            {letter}
            <audio id={letter} src={url}/>
        </div>
    )
}