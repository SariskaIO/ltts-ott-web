export async function fetchJsonData(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${path}: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching JSON data:`, error);
    return null;
  }
}

export async function getLanguages() {
  const languages = await fetchJsonData("/languages.json");
  return languages;
}

export async function getGenres() {
  const genres = await fetchJsonData("/genre.json");
  return genres;
}
