const API_ENDPOINT = "https://api.thecatapi.com/v1";

const get = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const data = await response.json();
    return data;
  }
};
export const fetchCats = async (keyword) => {
  const url = `${API_ENDPOINT}/breeds/search?q=${keyword}`;

  const breeds = await get(url);
  const promises = breeds.map(async (breed) => await fetchImage(breed.id));
  const responses = await Promise.all(promises);

  return {
    data: [].concat(...responses),
  };
};

export const fetchImage = async (id) => {
  const url = `${API_ENDPOINT}/images/search?limit=20&breed_ids=${id}`;
  const data = await get(url);
  return data;
};

export const fetchRandomImage = async () => {
  const url = `${API_ENDPOINT}/images/search?limit=50`;
  const data = await get(url);
  return data;
};

// fetch cat: `${API_ENDPOINT}/breeds/search?q=${keyword}`
// fetch image by breed id `${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`
// fetch Random image All: `${API_ENDPOINT}/images/search?limit=50`
