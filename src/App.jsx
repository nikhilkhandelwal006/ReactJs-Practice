import './App.css'
import PlayButton from './components/playButton';
import Video from "./components/Video";
import videosDB from './data/data';
import Counter from './components/counter';
import { useState } from 'react';


function App() {
  console.log('render app')

  const [videos,setVideos]=useState(videosDB)

  return (
    <div className="App">
      <div>
        <button onClick={()=>{
          setVideos([...videos,{id:videos.length+1,
            title: 'Mongo DB tutorial',
            views: '1M',
            time: '1 month ago',
            channel: 'Coder Dost',
            verified: true}])
        }}>Add button </button>
      </div>
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


       <Counter></Counter>
    </div>
  );
}

export default App;