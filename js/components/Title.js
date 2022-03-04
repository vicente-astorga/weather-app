import capitalize from '../helpers/capitalize.js'
const d = document;
  
export default function Title( desc) {
  const 
    $Desc = d.querySelector(".grid__title > h2"),
    description = capitalize(desc);
    
  $Desc.textContent = `${description}.`;
}
