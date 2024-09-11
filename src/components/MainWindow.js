// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import { getVideoCards } from "../utils"; 
// import RailCards from "./cards/railcards";
// import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column; 
//   height: 100vh;
//   width: 100%; 
//   position: relative; 
//   overflow: hidden;
//   background-color:black;
// `;

// const VideoContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   transition: height 0.3s ease; 
// `;

// const Video = styled.video`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const RailCardsContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 30%;
//   display: flex;
//   overflow-x: hidden; 
//   white-space: nowrap; 
//   background: black rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(10px);
//   padding: 20px;
//   z-index: 1; 
  
// `;

// const ToggleButton = styled.button`
//   position: absolute;
//   bottom: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: rgba(0, 0, 0, 0.5); 
//   color: white;
//   border: none;
//   border-radius: 50%; 
//   width: 50px; 
//   height: 50px;
//   padding: 15px; 
//   cursor: pointer;
//   z-index: 2; 
//   font-size: 20px;
//   display:flex;
//   align-item:center;
//   justify-content:center;
//   transition: opacity 0.2s ease;

//     &:hover {
//     background-color: rgba(0, 0, 0, 0.7); 
//   }
// `;


// const MainWindow = () => {
//   const [videos, setVideos] = useState([]); 
//   const [selectedVideo, setSelectedVideo] = useState(null); 
//   const [showRailCards, setShowRailCards] = useState(false); 
//   const [showToggleButton, setShowToggleButton] = useState(false); 
//   const [timer, setTimer] = useState(null);
//   const railCardsRef = useRef(null);

//   useEffect(() => {
//     async function fetchData() {
//       const videosData = await getVideoCards();
//       if (videosData && videosData.length > 0) {
//         setVideos(videosData); 
//         setSelectedVideo(videosData[0]); 

//         const videoElement = document.querySelector('video');
//         if (videoElement) {
//           videoElement.play().catch(error => {
//             console.error("Video playback failed:", error);
//           });
//         }
//       }
//     }

//     fetchData();
//   }, []);

//   const selectVideo =(video) => {
//     setSelectedVideo(video);
//     showRailCardsWithTimer();
//   }

//  const showRailCardsWithTimer =() => {
//   setShowRailCards(true);
//   clearTimeout(timer);
//   const newTimer = setTimeout(()=>{
//     if (railCardsRef.current && !railCardsRef.current.matches(':hover')) {
//       setShowRailCards(false);
//     }
//   },5000);
//   setTimer(newTimer);

//  };

//  const hideRailCards =() =>{
//   setShowRailCards(false);
//   clearTimeout(timer);
//  }

//  const handleRailCardsMouseEnter = () => {
//   clearTimeout(timer);
// };

// const handleRailCardsMouseLeave = () => {
//   showRailCardsWithTimer();
// };

  
//   return (
//     <Container
//       onMouseEnter={() => setShowToggleButton(true)}
//       onMouseLeave={() => setShowToggleButton(false)}
//     >
//       {/* <VideoContainer style={{ height: showRailCards ? "80%" : "100%" }}> //change */}
//         {selectedVideo ? (
//           <Video
//             src={selectedVideo.url}
//             autoPlay={true}
//             loop='true'
//             muted={true}
//             controls={false}
//             onPlay={(e) => e.target.muted = false}
 
//           />
//         ) : (
//           <p>Loading...</p>
//         )}
//       {/* </VideoContainer> */}

//       {showRailCards && (
//         <RailCardsContainer
//         ref={railCardsRef}
//         onMouseEnter={handleRailCardsMouseEnter}
//         onMouseLeave={handleRailCardsMouseLeave}
//         >
//           <RailCards videos={videos} onVideoSelect={selectVideo} />
//         </RailCardsContainer>
//       )}

//       {showToggleButton && !showRailCards && (
//         <ToggleButton onClick={showRailCardsWithTimer}>
//           <KeyboardDoubleArrowUpIcon />
//         </ToggleButton>
//       )}

//       {showToggleButton && showRailCards && (
//         <ToggleButton onClick={hideRailCards}>
//           <KeyboardDoubleArrowDownIcon />
//         </ToggleButton>
//       )}
//     </Container>
//   );
// };

// export default MainWindow;



import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Hls from 'hls.js';  
import { getVideoCards, captureClick } from "../utils"; 
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import RailCards from "../card/railcards";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: black;
  height: 100vh;

  @media (max-width: 1440px) {
    height: 100vh;  /* For laptop screens with 1440px width */
  }

  @media (max-width: 1024px) {
    height: 90vh;  /* For smaller laptops */
    center ;
    margin-top:30px;
  }

  @media (max-width: 768px) {
    height:66vh;  /* For tablets */
    width:100%;
    justify-content: center;  /* Center video vertically */
    align-items: center;      /* Center video horizontally */
    margin-top:120px;
    background-color: black;  /* Set background color to black */
    display: flex;
  }

  @media (max-width: mobile L-425px) {
    height: 40vh;  /* For mobile */
    width:100%;
  }
`;

const VideoContainer = styled.div`
  position: dynamic;
  overflow: visible;
  transition: height 0.3s ease;

  @media (max-width: 768px) {
    height: 70%;
  }

  @media (max-width: 425px) {
  .VideoContainer {
    width: 100vw;           /* Full width of the viewport */
    height: 100%;           /* Full height of the container */
    background-color: black; /* Black background to fill any space */
    display: flex;          /* Flexbox for centering */
    align-items: center;    /* Center vertically */
    justify-content: center; /* Center horizontally */
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height:100%; 
  
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;

const RailCardsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 10px;
  height: 30%;
  display: flex;
  overflow-x: hidden;
  white-space: nowrap;
  backdrop-filter: blur(10px);
  padding: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    height: 25%;  /* Adjust height for tablets */
  }

  @media (max-width: 480px) {
    height: 20%;  /* Adjust height for mobile */
    padding: 10px;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 15px;
  cursor: pointer;
  z-index: 2;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7); 

    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }
`;

const MainWindow = () => {
  const [videos, setVideos] = useState([]); 
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [showRailCards, setShowRailCards] = useState(false); 
  const [showToggleButton, setShowToggleButton] = useState(false); 
  const [isPermanentlyUnmuted, setIsPermanentlyUnmuted] = useState(false);  // Track permanent unmute state
  const videoRef = useRef(null);  
  const railCardsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const videosData = await getVideoCards();
      if (videosData && videosData.length > 0) {
        setVideos(videosData); 
        setSelectedVideo(videosData[0]); 
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    };

    if (selectedVideo && videoRef.current) {
      if (selectedVideo.isHls) {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(selectedVideo.url);  
          hls.attachMedia(videoRef.current);
          hls.on(Hls.Events.MANIFEST_PARSED, playVideo);
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
          videoRef.current.src = selectedVideo.url;
          playVideo();
        }
      } else {
        videoRef.current.src = selectedVideo.url;
        playVideo();
      }
    }

    if (videoRef.current) {
      const handleEnded = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      };
      videoRef.current.addEventListener('ended', handleEnded);

      return () => {
        if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleEnded);
        }
      };

    }
  }, [selectedVideo]);

  const selectVideo = (video) => {
    setSelectedVideo(video);
    setTimeout(() => {
      showRailCardsWithTimer();
    }, 0);
  }

  const showRailCardsWithTimer = () => {
    setShowRailCards(true);
    clearTimeout();
    const timer = setTimeout(() => {
      if (railCardsRef.current && !railCardsRef.current.matches(':hover')) {
        setShowRailCards(false);
      }
    }, 5000);
  };

  const hideRailCards = () => {
    setShowRailCards(false);
    clearTimeout();
  }

  const handleRailCardsMouseEnter = () => {
    clearTimeout();
  };

  const handleRailCardsMouseLeave = () => {
    showRailCardsWithTimer();
  };

  const handleContainerClick = (event,containerRef) => {
    captureClick(event,containerRef);
    if (!isPermanentlyUnmuted) {
      videoRef.current.muted = false;
      setIsPermanentlyUnmuted(true);  // Set to permanently unmute
    }
  };

  const handleDoubleClick = () => {
    toggleFullScreen();
  };

  const toggleFullScreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  console.log("demo",containerRef?.current)

  return (
    <Container
      onClick={(event) => handleContainerClick(event,containerRef)}  // Unmute on click
      onMouseEnter={() => setShowToggleButton(true)}
      onMouseLeave={() => setShowToggleButton(false)}
      onDoubleClick={handleDoubleClick}  // Trigger full-screen on double-click
      ref={containerRef}
    >
      {selectedVideo ? (
        <Video
          ref={videoRef}  
          autoPlay
          loop
          controls={false}
          muted={!isPermanentlyUnmuted}  // Start muted if not permanently unmuted
        />
      ) : (
        <p>Loading...</p>
      )}

      {showRailCards && (
        <RailCardsContainer
          ref={railCardsRef}
          onMouseEnter={handleRailCardsMouseEnter}
          onMouseLeave={handleRailCardsMouseLeave}
        >
          <RailCards videos={videos} onVideoSelect={selectVideo} />
        </RailCardsContainer>
      )}

      {showToggleButton && !showRailCards && (
        <ToggleButton onClick={showRailCardsWithTimer}>
          <KeyboardDoubleArrowUpIcon />
        </ToggleButton>
      )}

      {showToggleButton && showRailCards && (
        <ToggleButton onClick={hideRailCards}>
          <KeyboardDoubleArrowDownIcon />
        </ToggleButton>
      )}
    </Container>
  );
};

export default MainWindow;