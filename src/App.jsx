import './App.css'
import PlayButton from './components/playButton';
import Video from "./components/Video";
import videos from './data/data';


function App() {
  
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <div>Videos</div>
      {
        videos.map(video=> <Video
        key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          >
              <PlayButton  onPlay={()=>console.log('playing..',video.title)} onPause={()=>console.log('paused.. ',video.title)}>{video.title}</PlayButton> 
              {/*  nested components childern se aata h  */}

          </Video>)
          
      }
      <div style={{clear:'both'}}>
       {/* <PlayButton  message="play-msg" onSmash={()=>console.log('playyy')}>play</PlayButton>
       <PlayButton  message="pause-msg" onSmash={()=>alert('pause')}>pause</PlayButton> 
       {/* <PlayButton  onPlay={()=>console.log('playyy')} onPause={()=>console.log('pause')}>play</PlayButton> */}
       </div>
    </div>
  );
}

export default App;