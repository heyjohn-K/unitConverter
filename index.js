let inputElement = document.getElementById("input-section");
let btnElement = document.getElementById("btn");
let lengthOutput = document.getElementById("length-output");
let volumeOutput = document.getElementById("volume-output");
let massOutput = document.getElementById("mass-output");

btnElement.addEventListener("click", function() {
  let inputValue = Number(inputElement.value);
  let lengthInMeters = inputValue * 0.3048;
  let lengthInFeet = inputValue / 0.3048;
  let volumeInLiters = inputValue * 3.78541;
  let volumeInGallons = inputValue / 3.78541;
  let massInKilograms = inputValue * 0.453592;
  let massInPounds = inputValue / 0.453592;
  lengthOutput.textContent = `${inputValue} feet = ${lengthInMeters.toFixed(3)} meters | ${inputValue} meters = ${lengthInFeet.toFixed(3)} feet`;
  volumeOutput.textContent = `${inputValue} gallons = ${volumeInLiters.toFixed(3)} liters | ${inputValue} liters = ${volumeInGallons.toFixed(3)} gallons`;
  massOutput.textContent = `${inputValue} pounds = ${massInKilograms.toFixed(3)} kilograms | ${inputValue} kilograms = ${massInPounds.toFixed(3)} pounds`;
})