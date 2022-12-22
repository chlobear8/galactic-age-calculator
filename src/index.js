import Age from './age.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleAgeForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const currentAge = parseInt(document.querySelector('#current-age').value);
  const pastAge = parseInt(document.querySelector('#years-passed').value);
  const futureAge = parseInt(document.querySelector('#yet-passed').value);
  const age = new Age(earthYears);
  const mercury = age.toMercuryYears();
  const venus = age.toVenusYears();
  const mars = age.toMarsYears();
  const jupiter = age.toJupiterYears();
  const pTag = document.createElement("p");
  pTag.append(age + " " + mercury + " " + venus + " " + mars + " " + jupiter);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  this.document.querySelector("#age-calculator").addEventListener("submit", handleAgeForm);
});