
const d = document;
  
export function Location( city, country) {
  const 
    $City = d.querySelector(".grid__location__city"),
    $Country = d.querySelector(".grid__location__country");
  $City.textContent = `${city},`;
  $Country.textContent = country;
}


