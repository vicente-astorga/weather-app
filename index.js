import degConversion from "./js/helpers/degsConversion.js";
import Position from "./js/helpers/positionGet.js";
import { Location } from "./js/components/Location.js";
import {
  getWeatherByCoords,
  getWeatherByName,
  getWeeklyWeatherByCoords,
} from "./js/helpers/weatherCall.js";
import Degree from "./js/components/Degree.js";
import Title from "./js/components/Title.js";
import Weather from "./js/components/Weather.js";
import Info from "./js/components/Info.js";
import Alert from "./js/components/Alert.js";
import { showLoader, hideLoader } from "./js/components/Loader.js";
const d = document;

showLoader();
buttonLocation();

//default London coords
let lat1 = 51.5085, lon1 = -0.1257;
App(lat1, lon1);

async function App(lat, lon) {
  try {
    // get weather by coords
    const weather = await getWeatherByCoords(lat, lon);
    const weekWeather = await getWeeklyWeatherByCoords(lat, lon);

    // values
    const temp = degConversion(weather.main.temp, "C"),
      city = weather.name,
      country = weather.sys.country,
      title = weather.weather[0].description,
      wind = weather.wind.speed,
      humidity = weather.main.humidity,
      min = degConversion(weather.main.temp_min, "C"),
      max = degConversion(weather.main.temp_max, "C");

    // set components
    Location(city, country);
    Degree(temp, "C");
    Title(title);
    Info(min, max, wind, humidity);
    Weather(weekWeather);
    hideLoader();
  } catch (err) {
    hideLoader();
    Alert(err.message);
  }
}

function buttonLocation() {
  const button = d.querySelector(".grid__location__button");
  button.addEventListener("click", async () => {
    showLoader();
    try {
      const { lat, lon } = await Position();
      App(lat, lon);
    } catch (err) {
      hideLoader();
      Alert(err);
    }
  });
}
