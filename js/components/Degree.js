const d = document;
  
export default function Degree( temp, scale) {
  const 
    $Number = d.querySelector(".grid__degree__number"),
    $Scale = d.querySelector(".grid__degree__scale");
  $Number.textContent = `${temp}`;
  $Scale.textContent = `°${scale}`;
}
