const resultElem = document.querySelector("#result-value");
const temperatureValue = document.querySelector("#temperature-value");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  temperatureValue.value = "";
  resultElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = temperatureValue.value;

  if (tempType.value === "fahrenheit") {
    // formula ==> (°F − 32) × 5/9 = °C
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    resultElem.innerHTML = `${FahrenheitToCelsius.toFixed(2)} &deg;C`;
  } else if (tempType.value === "celsius") {
    // formula ==> (°C × 9/5) + 32 = °F
    const celciusToFarenhite = inputValue * (9 / 5) + 32;
    resultElem.innerHTML = `${celciusToFarenhite.toFixed(2)} &deg;F`;
  }
}
