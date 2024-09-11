
export async function fetchJsonData(path) {
  try {
      const response = await fetch(path);
      if (!response.ok) {
          throw new Error(`Failed to fetch data from ${path}: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(`Error fetching JSON data:`, error);
      return null;
  }
}

export async function getVideoCards() {
  const videos = await fetchJsonData('/data/railCards.json');

  if (videos && Array.isArray(videos)) {
      return videos.map(video => {
          if (video.url && video.url.endsWith('.m3u8')) {
              return {
                  ...video,
                  isHls: true // Mark video as HLS if it is an m3u8 stream
              };
          } else {
              return {
                  ...video,
                  isHls: false // Mark video as non-HLS otherwise
              };
          }
      });
  }

  return videos;
}

export async function getLanguages() {
  const languages = await fetchJsonData("/languages.json");
  return languages;
}

export async function getGenres() {
  const genres = await fetchJsonData("/genre.json");
  return genres;
}

export const captureClick = (event, layoutRef) => {
    console.log("event",event, layoutRef?.current)
    if(layoutRef?.current){
    const element = layoutRef.current;

  const { clientX, clientY } = event;

  // Get the width and height of the video element
  const videoWidth = element?.clientWidth;
  const videoHeight = element?.clientHeight;

  // Define the areas of each stitched video
  const topVideoHeight = videoHeight * 0.7; // First video takes 80% of the height
  const bottomVideosHeight = videoHeight * 0.3; // The remaining 20% is for the bottom 4 videos
  const bottomVideoWidth = videoWidth / 5; // Each bottom video takes 1/4 of the width

  let clickedVideo = '';

  // Check if the click is within the top video
  if (clientY <= topVideoHeight) {
    clickedVideo = 'Top Video';
  } else {
    // Check which of the bottom 4 videos was clicked
    const relativeX = clientX;
    if (relativeX < bottomVideoWidth) {
      clickedVideo = 'Bottom Video 1';
    } else if (relativeX < bottomVideoWidth * 2) {
      clickedVideo = 'Bottom Video 2';
    } else if (relativeX < bottomVideoWidth * 3) {
      clickedVideo = 'Bottom Video 3';
    } else if (relativeX < bottomVideoWidth * 4) {
        clickedVideo = 'Bottom Video 4';
    } else {
      clickedVideo = 'Bottom Video 5';
    }
  }

  console.log(`Clicked on: ${clickedVideo}`, event, clientX, clientY, videoWidth, videoHeight, topVideoHeight, bottomVideoWidth);

    }
}