import getApi from "../utils/getApi.js";
import Asteroide from "../objects/Asteroide.js";

const array = [];

async function crearAsteroide() {
  try {
    const respuesta = await getApi(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key="
    );

    const nearEarthObjects = respuesta["near_earth_objects"];
    const dateKeys = Object.keys(nearEarthObjects);

    dateKeys.forEach((date) => {
      const asteroidList = nearEarthObjects[date];

      asteroidList.forEach((asteroide) => {
        const Asteroide_API = new Asteroide();

        Asteroide_API.setNombre(asteroide["name"]);
        Asteroide_API.setImagen("a");
        let average_diameter =
          (asteroide["estimated_diameter"]["kilometers"][
            "estimated_diameter_min"
          ] +
            asteroide["estimated_diameter"]["kilometers"][
              "estimated_diameter_max"
            ]) /
          2;

        Asteroide_API.setTamaño(average_diameter);
        let velocidadTotal =
          asteroide["close_approach_data"][0]["relative_velocity"][
            "miles_per_hour"
          ];

        Asteroide_API.setVelocidad(velocidadTotal);
        Asteroide_API.setDireccion();
        Asteroide_API.setId(asteroide["id"]);

        array.push(Asteroide_API);
        console.log(Asteroide_API);
      });
    });
  } catch (error) {
    console.error(error);
  }

  return asteroidList
}

crearAsteroide();

export default crearAsteroide;