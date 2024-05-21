let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
  count += 1;
  countEl.innerText = count;
  console.log("Count has been updated!");
}
function save() {
  let countMod = " " + count + " - ";
  saveEl.textContent += countMod;
  count = 0;
  countEl.innerText = count;
}
