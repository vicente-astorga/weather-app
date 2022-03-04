import degConversion from "./degsConversion.js";

const d = document;
const $list = d.querySelector(".grid__weather__card-group");

export default function dailyWeather(list) {
  list.forEach((e) => {
    $list.append(eachDay(e));
  });
}

function dayTemplate(hour, img, degs, desc) {
  return `
          <img src=${img} alt=${desc}>
          <span class="hour">${hour}</span>
          <span class="degs">${degs}°</span>
      `;
}

function eachDay(element) {
  const $el = d.createElement("div"),
    dayDegs = degConversion(element.temp, "C"),
    dayImg = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
    formatHour = new Intl.DateTimeFormat("en",{hour: "numeric"}).format(element.dt*1000),
    bodyTemplate = dayTemplate(formatHour, dayImg, dayDegs, "icon");

  $el.classList.add("grid__weather__card");
  // $el.classList.add("selected");
  $el.innerHTML = bodyTemplate;
  return $el;
}
