import React,{useState,useRef,useEffect} from 'react'
import ReactPlayer from "react-player"
function MyVideo({url}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
  
    useEffect(() => {
      let handlePlay = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      };
  
      let observer = new IntersectionObserver(handlePlay);
  
      observer.observe(videoRef.current);
    });


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
