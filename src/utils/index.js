
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

export async function getVideoCards(hlsUrls = []) {

  const videos = hlsUrls.map(url => ({
    url, 
    // title: `Video for ${url}`, 
    isHls: true 
  }));

  console.log("Video url: ",videos.url);

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

export const captureClick = (event, layoutRef, setVideoIndex) => {
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
      clickedVideo = 'Bottom Video 0';
      setVideoIndex(0);
    } else if (relativeX < bottomVideoWidth * 2) {
      clickedVideo = 'Bottom Video 1';
      setVideoIndex(1);
    } else if (relativeX < bottomVideoWidth * 3) {
      clickedVideo = 'Bottom Video 2';
      setVideoIndex(2);
    } else if (relativeX < bottomVideoWidth * 4) {
        clickedVideo = 'Bottom Video 3';
        setVideoIndex(3);
    } else {
      clickedVideo = 'Bottom Video 4';
      setVideoIndex(4);
    }
  }

  console.log(`Clicked on: ${clickedVideo}`, event, clientX, clientY, videoWidth, videoHeight, topVideoHeight, bottomVideoWidth);

    }
}

// export async function saveUrlsToJson(urls) {
//   try {
//     const response = await fetch('/data/railCards.json', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ urls }), // Send the URLs as an array
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to save URLs: ${response.statusText}`);
//     }

//     const result = await response.json();
//     console.log("Save url",result);
//     return result; // Return the response (could be a success message)
//   } catch (error) {
//     console.error('Error saving URLs:', error);
//     return null;
//   }
// }

// // const addUrl = (index) => {
// //   const newUrls = [...urls];
// //   if (newUrls[index].url) {
// //     newUrls[index].isAdded = true; // Mark the URL as added
// //     setUrls(newUrls);

// //     // Call the save function to post the URLs
// //     const urlsToSave = newUrls.map(item => item.url); // Extract only the URLs
// //     saveUrlsToJson(urlsToSave)
// //       .then(result => {
// //         if (result) {
// //           console.log('URLs saved successfully:', result);
// //         }
// //       })
// //       .catch(err => console.error('Failed to save URLs', err));
// //   }
// // };
