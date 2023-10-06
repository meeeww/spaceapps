import axios from "axios"

const apiKey = "yQn0L1akGvnnJ1pDfFsF5qNXtJLxUOR3AOVWUkeo"

async function getApi(URL) {
    try {
      const response = await axios.get(URL + apiKey)
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

export default getApi

//absolute_magnitude_h
//is_potentially_hazardous_asteroid

//close_approach_data
    //relative_velocity
        //kilometers_per_second