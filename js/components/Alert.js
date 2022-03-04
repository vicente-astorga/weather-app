const d = document;

export default function Alert(err) {
  console.log("error: " + err);

  const $alert = d.querySelector(".alert");
  $alert.textContent = `${err}`;
  $alert.style.top = "0px";

  setTimeout(() => {
    $alert.style.top = "-200px";
  }, 2000);
}
