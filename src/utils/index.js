
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
export const captureClick = (event, layoutRef, setVideoIndex, availableBottomVideos) => {
  
  if (layoutRef?.current && availableBottomVideos > 0) {
    const element = layoutRef.current;
    const { clientX, clientY } = event;

    const videoWidth = element.clientWidth;
    const videoHeight = element.clientHeight;

    const topVideoHeight = videoHeight * 0.7;  // Top video occupies 70% of height
    const bottomVideosHeight = videoHeight * 0.3;  // Bottom videos occupy 30% of height

    let clickedVideo = '';

    // Check if clicked in the top video area
    if (clientY <= topVideoHeight) {
      clickedVideo = 'Top Video';
    } else {
      // Calculate dynamic width for each bottom video based on the number of videos
      const bottomVideoWidth = videoWidth / availableBottomVideos;

      // Determine which bottom video was clicked based on X position
      const relativeX = clientX;
      for (let i = 0; i < availableBottomVideos; i++) {
        if (relativeX >= bottomVideoWidth * i && relativeX < bottomVideoWidth * (i + 1)) {
          clickedVideo = `Bottom Video ${i}`;
          setVideoIndex(i);  // Set the video index to the clicked one
          break;
        }
      }
    }
  }
};

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
