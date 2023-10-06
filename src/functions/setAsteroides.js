import getApi from "../utils/getApi.js";
import Asteroide from "../objects/Asteroide.js"

// await getApi().then((respuesta) => { console.log(respuesta)})
const array = []

getApi().then((respuesta) => {
    console.log(respuesta["near_earth_count"].map((dias) => {
        dias.map((asteroide) => {
            let Asteroide_API = new Asteroide;
            Asteroide_API.setDireccion(asteroide["id"])

            //
            Array.push(Asteroide_API)
        })
    }))
});
