import Card from "./Card.js";

const d = document;
const $list = d.querySelector(".grid__weather__card-group");
const $tabs = d.querySelectorAll(".grid__weather__tab-group > div");

export default function Weather(weather) {
  //default
  selection("TODAY");
  $tabs.forEach((el) => {
    el.addEventListener("click", (e) => {
      //   selector CHANGE
      const $oldSelected = d.querySelector(".selected");
      $oldSelected.classList.remove("selected");
      const $newSelected = e.target;
      $newSelected.classList.add("selected");

      selection(e.target.textContent);
    });
  });

  function selection(tabSelected) {
    if (tabSelected === "TODAY") {
      const list = weather.hourly.slice(0, 7);
      $list.innerHTML=""
      list.forEach((e) => {
        $list.append(Card(e, "hourly"));
      });
    } else if (tabSelected === "TOMORROW") {
      const list = weather.hourly.slice(24, 31);
      $list.innerHTML=""
      list.forEach((e) => {
        $list.append(Card(e, "hourly"));
      });
    } else if (tabSelected === "WEEK") {
      const list = weather.daily.slice(0, 7);
      $list.innerHTML=""
      list.forEach((e) => {
        $list.append(Card(e, "daily"));
      });
    }
  }
}
