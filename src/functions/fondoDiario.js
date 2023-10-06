import getApi from "../utils/getApi.js";

async function getFondo() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get("date");
    var formattedDate = new Date(date);
    const today = new Date();
    while (formattedDate.getFullYear() !== 2020 || formattedDate > today) {
      formattedDate = new Date("2019-12-31");
      formattedDate.setDate(
        formattedDate.getDate() + Math.floor(Math.random() * 365)
      );
    }
    console.log(formattedDate.toISOString().slice(0, 10));
    var response = await getApi(
      `https://api.nasa.gov/planetary/apod?&date=${formattedDate
        .toISOString()
        .slice(0, 10)}&api_key=`
    );
    document.querySelector(
      ".menuPrincipal"
    ).style.backgroundImage = `url(${response.url})`;
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load", getFondo);
