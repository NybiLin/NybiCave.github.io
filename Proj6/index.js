const convertBtn = document.getElementById("convert-btn");
const inputel = document.getElementById("input-el");
const lengthsection = document.getElementById("length");
const volumeSection = document.getElementById("volume");
const massSection = document.getElementById("mass");
console.log(convertBtn);

convertBtn.addEventListener("click", function () {
  let length = convert(inputel.value, "length");
  let volume = convert(inputel.value, "volume");
  let mass = convert(inputel.value, "mass");
  displayhtml(lengthsection, inputel.value, length, "length");
  displayhtml(volumeSection, inputel.value, volume, "volume");
  displayhtml(massSection, inputel.value, mass, "mass");
});

function displayhtml(arg1, arg2, arg3, arg4) {
  if (arg4 === "length") {
    arg1.textContent = `${arg2} meters = ${arg3[0]} feet | ${arg2} feet = ${arg3[1]} meters`;
  } else if (arg4 === "volume") {
    arg1.textContent = `${arg2} liters = ${arg3[0]} gallons | ${arg2} gallon = ${arg3[1]} liters`;
  } else if (arg4 === "mass") {
    arg1.textContent = `${arg2} kilos = ${arg3[0]} pounds | ${arg2} pounds = ${arg3[1]} kilos`;
  }
}

function convert(arg1, arg2) {
  let resultOne = null;
  let resultTwo = null;

  if (arg2 === "length") {
    resultOne = arg1 * 3.281;
    resultOne = resultOne.toFixed(3);
    resultTwo = arg1 * 0.3048;
    resultTwo = resultTwo.toFixed(3);
  } else if (arg2 === "volume") {
    resultOne = arg1 * 0.264;
    resultOne = resultOne.toFixed(3);
    resultTwo = arg1 * 3.785;
    resultTwo = resultTwo.toFixed(3);
  } else if (arg2 === "mass") {
    resultOne = arg1 * 0.453;
    resultOne = resultOne.toFixed(3);
    resultTwo = arg1 * 2.204;
    resultTwo = resultTwo.toFixed(3);
  }
  return [resultOne, resultTwo];
}
