import degConversion from "../helpers/degsConversion.js";

const d = document;
export default function Card(element, disp) {
  let dayDegs, dayMin, dayMax, formatHour, bodyTemplate;
  const $el = d.createElement("div"),
    dayImg = `icons/${element.weather[0].icon}.png`;

    console.log()
  if (disp === "daily") {
    dayMin = degConversion(element.temp.min, "C");
    dayMax = degConversion(element.temp.max, "C");
    formatHour = new Intl.DateTimeFormat("en", { weekday: "short" }).format(
      element.dt * 1000
    );
  bodyTemplate = weekDayTemplate(formatHour, dayImg, dayMin, dayMax, "icon");


  } else if (disp === "hourly") {
    dayDegs = degConversion(element.temp, "C");
    formatHour = new Intl.DateTimeFormat("en", { hour: "numeric" }).format(
      element.dt * 1000
    );
  bodyTemplate = dayTemplate(formatHour, dayImg, dayDegs, "icon");

  }


  $el.classList.add("grid__weather__card");
  // $el.classList.add("selected");
  $el.innerHTML = bodyTemplate;
  return $el;
}

function dayTemplate(formatHour, dayImg, dayDegs, desc) {
  return `
            <img src=${dayImg} alt=${desc}>
            <div>
              <span class="hour">${formatHour}</span>
              <span class="degs">${dayDegs}°</span>
            </div>
            `;
}

function weekDayTemplate(formatHour, dayImg, minDayDegs, maxDayDegs, desc) {
  return `
            <img src=${dayImg} alt=${desc}>
            <div>
              <span class="hour">${formatHour}</span>
              <span class="degs">${minDayDegs}/${maxDayDegs}°</span>
            </div>
            `;
}