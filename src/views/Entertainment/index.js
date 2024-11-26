// import React, { useState } from 'react'
// import HlsPlayer from '../../components/meet/HLSPlayer'
// import DrawerBox from '../../components/DrawerBox'

// const Entertainment = () => {
//   return (
//     <div>
//         <HlsPlayer
//             src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" // Replace with your .m3u8 URL
//             autoPlay={true}
//             controls={false}
//         />
//     </div>
//   )
// }

// export default Entertainment;

  
import React, { useRef, useEffect } from "react";
import HlsPlayer from "../../components/meet/HLSPlayer";

const Entertainment = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  const handleDoubleClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
      onDoubleClick={handleDoubleClick} 
    >
      <HlsPlayer
        ref={videoRef}
        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" 
        autoPlay={true}
        controls={false} 
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", 
        }}
      />
    </div>
  );
};

export default Entertainment;






// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import Hls from "hls.js";
// import { getVideoCards, captureClick } from "../../utils";
// // import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// // import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// // import RailCards from "../card/railcards";
// import { useSelector } from "react-redux";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
//   background-color: black;
//   height: 100vh;

//   @media (max-width: 1440px) {
//     height: 100vh;  /* For laptop screens with 1440px width */
//   }

//   @media (max-width: 1024px) {
//     height: 90vh;  /* For smaller laptops */
//     center ;
//     margin-top:30px;
//   }

//   @media (max-width: 768px) {
//     height:66vh;  /* For tablets */
//     width:100%;
//     justify-content: center;  /* Center video vertically */
//     align-items: center;      /* Center video horizontally */
//     margin-top:2%;
//     background-color: black;  /* Set background color to black */
//     display: flex;
//   }

//   @media (max-width: mobile L-425px) {
//     height: auto;  /* For mobile */
//     width:100%;
//     justify-content: top;  /* Center video vertically */
//     align-item: flex-start;
//     margin-top:0;
//   }
// `;

// const VideoContainer = styled.div`
//   position: dynamic;
//   overflow: visible;
//   transition: height 0.3s ease;

//   @media (max-width: 768px) {
//     // height: 70%;

//     height: auto;
//     width: 100%;
//     max-width: 100%;
//     align-item: center;
//     justify-content: center;
//   }
//      @media (max-width: 480px) {
//     width: 100vw;           /* Full width of the viewport */
//     height: 100%;           /* Full height of the container */
//     background-color: black; /* Black background to fill any space */
//     display: flex;          /* Flexbox for centering */
//     align-items: center;    /* Center vertically */
//     justify-content: center; /* Center horizontally */
//   }

//   // @media (max-width: 425px) {
//   // .VideoContainer {
//   //   width: 100vw;           /* Full width of the viewport */
//   //   height: 100%;           /* Full height of the container */
//   //   background-color: black; /* Black background to fill any space */
//   //   display: flex;          /* Flexbox for centering */
//   //   align-items: center;    /* Center vertically */
//   //   justify-content: center; /* Center horizontally */
//   // }
// `;

// const Video = styled.video`
//       object-fit: contain;
//    width: 100%;
//    height: 100vh;
//    margin-top: 20px;
//    max-height: 100%;


//   @media (max-width: 768px) {
//     height: auto;
//     width: 100%;
//   }

//   @media (max-width: 480px) {
//     align-item: flex-start;
//     height: auto;
//     width: 100%;
//     margin-top: -70px;
//   }
// `;

// const RailCardsContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 10px;
//   height: 30%;
//   display: flex;
//   overflow-x: hidden;
//   white-space: nowrap;
//   backdrop-filter: blur(10px);
//   padding: 20px;
//   z-index: 1;

//   @media (max-width: 768px) {
//     height: 25%; /* Adjust height for tablets */
//   }

//   @media (max-width: 480px) {
//     height: 20%; /* Adjust height for mobile */
//     padding: 10px;
//   }
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
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: opacity 0.2s ease;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.7);

//     @media (max-width: 480px) {
//       width: 40px;
//       height: 40px;
//       font-size: 16px;
//     }
//   }
// `;

// const Entertainment = () => {
//   const [videos, setVideos] = useState([]);
//   const [url, setUrl] = useState('');
//   const [videoIndex, setVideoIndex] = useState(0);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [showRailCards, setShowRailCards] = useState(false);
//   const [showToggleButton, setShowToggleButton] = useState(false);
//   const [isPermanentlyUnmuted, setIsPermanentlyUnmuted] = useState(false); // Track permanent unmute state
//   const videoRef = useRef(null);
//   const railCardsRef = useRef(null);
//   const containerRef = useRef(null);
//   const hlsUrls = ['https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8'];
//   const [selectedUrl, setSelectedUrl] = useState('https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8');
  

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const videoCards = await getVideoCards(hlsUrls);
//       setVideos(videoCards);
//       console.log("Videocard url:",videoCards);
//     };

//     fetchVideos();
//   }, []);

//   useEffect(() => {
//     if (videos?.length >0 && videos[videoIndex]) {
//       const currentVideo = videos[videoIndex];
//       setSelectedVideo(currentVideo);
//       setSelectedUrl(currentVideo.url);

//     }
//   }, [videoIndex,videos]);

//   useEffect(() => {
//     let hls;
//     const playVideo = () => {
//       if (videoRef.current) {
//       videoRef.current.play().catch((error) => {
//         console.error("Autoplay failed:", error);
//       });
//     }
//     };

//     if (selectedVideo && videoRef.current) {
//       if (selectedVideo.isHls) {
//         if (Hls.isSupported()) {
//           hls = new Hls();
//           hls.loadSource(selectedUrl);
//           hls.attachMedia(videoRef.current);
//           hls.on(Hls.Events.MANIFEST_PARSED, playVideo);
//         } else if (
//           videoRef.current.canPlayType("application/vnd.apple.mpegurl")
//         ) {
//           videoRef.current.src = selectedUrl;
//           playVideo();
//         }
//       } else {
//         videoRef.current.src = selectedUrl;
//         playVideo();
//       }

//     }
//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };

//   }, []);

 
//   let timer;
//   const showRailCardsWithTimer = () => {
//     setShowRailCards(true);
//     clearTimeout();
//     timer = setTimeout(() => {
//       if (railCardsRef.current && !railCardsRef.current.matches(":hover")) {
//         setShowRailCards(false);
//       }
//     }, 5000);
//   };



//   const handleContainerClick = (event, containerRef) => {
//     captureClick(event, containerRef, setVideoIndex, videos?.length);
//     if (!isPermanentlyUnmuted && videoRef.current) {
//       videoRef.current.muted = false;
//       setIsPermanentlyUnmuted(true); // Set to permanently unmute
//     }
//   };

//   const handleDoubleClick = () => {
//     toggleFullScreen();
//   };

//   const toggleFullScreen = () => {
//     const elem = document.documentElement;
//     if (!document.fullscreenElement) {
//       if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//       } else if (elem.mozRequestFullScreen) {
//         elem.mozRequestFullScreen();
//       } else if (elem.webkitRequestFullscreen) {
//         elem.webkitRequestFullscreen();
//       } else if (elem.msRequestFullscreen) {
//         elem.msRequestFullscreen();
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//   };
//   console.log(
//     "demo",
//     containerRef?.current,
//     videoIndex,
//     videos,
//     videoIndex,
//     selectedVideo
//   );

//   return (
//     <Container
//       onClick={(event) => handleContainerClick(event, containerRef)} // Unmute on click
//       ref={containerRef}
//     >
//       {selectedVideo ? (
//         <VideoContainer>
//         <Video
//           onClick={() => setSelectedUrl(selectedUrl)}
//           value = {selectedUrl}
//           ref={videoRef}  
//           autoPlay
//           loop
//           controls={false}
//           muted={!isPermanentlyUnmuted}  // Start muted if not permanently unmuted
//         />
//         </VideoContainer>
//       ) : (
//         <p>Loading...</p>
//       )}


//     </Container>
//   );
// };

// export default Entertainment;
// // import React, { useEffect, useRef } from 'react'
// // import DrawerBox from '../../components/DrawerBox'
// // import styled from 'styled-components';
// // import Hls from 'hls.js';


// // const Video = styled.video`
// //       object-fit: contain;
// //    width: 100%;
// //    height: 100vh;
// //    margin-top: 20px;
// //    max-height: 100%;


// //   @media (max-width: 768px) {
// //     height: auto;
// //     width: 100%;
// //   }

// //   @media (max-width: 480px) {
// //     align-item: flex-start;
// //     height: auto;
// //     width: 100%;
// //     margin-top: -70px;
// //   }
// // `;

// // const Entertainment = () => {
// //     const [open, setOpen] = React.useState(true);
// //     const videoRef = useRef(null);
  
// //     const toggleDrawer = (newOpen) => () => {
// //       setOpen(newOpen);
// //     };

// //     useEffect(() => {
// //         let hls;
// //         const playVideo = () => {
// //           if (videoRef.current) {
// //           videoRef.current.play().catch((error) => {
// //             console.error("Autoplay failed:", error);
// //           });
// //         }
// //         };
// //         let selectedUrl = 'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8';
// //         if (videoRef.current) {
// //           if (videoRef.current.isHls) {
// //             if (Hls.isSupported()) {
// //               hls = new Hls();
// //               hls.loadSource(selectedUrl);
// //               hls.attachMedia(videoRef.current);
// //               hls.on(Hls.Events.MANIFEST_PARSED, playVideo);
// //             } else if (
// //               videoRef.current.canPlayType("application/vnd.apple.mpegurl")
// //             ) {
// //               videoRef.current.src = selectedUrl;
// //               playVideo();
// //             }
// //           } else {
// //             videoRef.current.src = selectedUrl;
// //             playVideo();
// //           }
    
// //         }
// //         return () => {
// //           if (hls) {
// //             hls.destroy();
// //           }
// //         };
// //     },[]);

// //   return (
// //     <div>
// //         <Video
// //           ref={videoRef}
// //           value = {'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8'}
// //           height={'500'}
// //           width={'500'}
// //          // autoPlay
// //           loop
// //           controls={true}
// //           muted={true}  // Start muted if not permanently unmuted
// //         />
// //         <DrawerBox toggleDrawer={toggleDrawer} open={open} />
// //     </div>
// //   )
// // }

// // export default Entertainment