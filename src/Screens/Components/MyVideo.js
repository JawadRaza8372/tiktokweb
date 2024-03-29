import React,{useState,useRef,useEffect} from 'react'
import ReactPlayer from "react-player"
function MyVideo({url}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    };
      return (
        <div className="video">
          <video
        className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        controls
        controlsList="nodownload"
        src={url}
      ></video>
        </div>
    )
}

export default MyVideo
