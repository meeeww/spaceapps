import axios from "axios"

const apiKey = "yQn0L1akGvnnJ1pDfFsF5qNXtJLxUOR3AOVWUkeo"

export default function getApi(){
    axios.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=yQn0L1akGvnnJ1pDfFsF5qNXtJLxUOR3AOVWUkeo").then((respuesta) => {
        console.log(respuesta.data)
    })
}

//absolute_magnitude_h
//is_potentially_hazardous_asteroid

//close_approach_data
    //relative_velocity
        //kilometers_per_second