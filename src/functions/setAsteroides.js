import getApi from "../utils/getApi.js";
import Asteroide from "../objects/Asteroide.js"

// await getApi().then((respuesta) => { console.log(respuesta)})
const array = []

getApi("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=").then((respuesta) => {
    console.log(respuesta)
    // console.log(respuesta["near_earth_count"].map((dias) => {
    //     dias.map((asteroide) => {
    //         let Asteroide_API = new Asteroide;
    //         Asteroide_API.setDireccion(asteroide["id"])

    //         //
    //         Array.push(Asteroide_API)
    //     })
    // }))
});
