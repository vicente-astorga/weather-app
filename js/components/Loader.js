const d = document;
const $loader = d.querySelector(".loader");

export function showLoader() {
  $loader.classList.remove("hidden");
}

export function hideLoader() {
  $loader.classList.add("hidden");
}
