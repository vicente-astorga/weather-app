const d = document;
  
export default function Info(min, max, wind, humidity) {
  const 
    $Min = d.querySelector(".grid__info__min > span"),
    $Max = d.querySelector(".grid__info__max > span"),
    $Wind = d.querySelector(".grid__info__wind > span"),
    $Humidity = d.querySelector(".grid__info__humidity > span");

  $Min.textContent = `${min}°`;
  $Max.textContent =  `${max}°`;
  $Wind.textContent =  `${Math.round(wind * 3.6)}k/h`;
  $Humidity.textContent =  `${humidity}%`;
}