
import './playButton.css'

function PlayButton({children,message, onSmash, onPlay, onPause}){
    let playing=false
    
    function handlePlay(e){
        console.log(e)
        e.stopPropagation()
    //   onSmash
    if(playing) onPause()
        else onPlay()

     playing=!playing
    }

 return(
    <button onClick={handlePlay}>{children}</button>
 )

} 

export default PlayButton;