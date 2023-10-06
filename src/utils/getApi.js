import axios from "axios"

const apiKey = "yQn0L1akGvnnJ1pDfFsF5qNXtJLxUOR3AOVWUkeo"

async function getApi() {
    try {
      const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed", {
        params: {
          start_date: "2015-09-07",
          end_date: "2015-09-08",
          api_key: apiKey,
        },
      });

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