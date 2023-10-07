const apiKey = "yQn0L1akGvnnJ1pDfFsF5qNXtJLxUOR3AOVWUkeo";

async function getApi(URL) {
  try {
    const response = await fetch(URL + apiKey);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getApi;
