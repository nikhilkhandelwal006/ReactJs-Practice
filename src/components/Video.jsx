
import './Video.css';

function Video({title,channel="Coder Dost",views,time,verified,id}) {
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/180/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified? '✅': null} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;