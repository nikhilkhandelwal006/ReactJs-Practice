
import { useState } from 'react'
import './playButton.css'

function PlayButton({children,message, onSmash, onPlay, onPause}){
    console.log('render playButton')
    const [playing, setPlaying]=useState(false);
    
    function handlePlay(e){
        // console.log(e)
        e.stopPropagation()
    //   onSmash()
    if(playing) onPause()
        else onPlay()

     setPlaying(!playing)
    }

 return(
    <button onClick={handlePlay}>{children}: {playing? '▶️': '⏯️'}</button>
 )

} 

export default PlayButton;