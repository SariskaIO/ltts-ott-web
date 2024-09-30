import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const HlsPlayer = ({ src, autoPlay = false, controls = true }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch((error) => {
            console.error('Error trying to autoplay the video:', error);
          });
        }
      });

      hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Network error occurred:', data);
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Media error occurred:', data);
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari, where HLS is natively supported
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        if (autoPlay) {
          video.play().catch((error) => {
            console.error('Error trying to autoplay the video in Safari:', error);
          });
        }
      });
    }
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      controls={controls}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default HlsPlayer;
