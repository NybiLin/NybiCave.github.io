const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passIdOne = document.getElementById("pass-el-one");
let passIdTwo = document.getElementById("pass-el-two");
let numbChar = 15;
let passOne = [];
let passTwo = [];

function getRandomLetter() {
  let randomNum = Math.floor(Math.random() * characters.length);
  let randomLetter = characters[randomNum];
  return randomLetter;
}

function displayPass(pass, pass2) {
  passIdOne.textContent = "";
  passIdTwo.textContent = "";
  for (i = 0; i < numbChar; i++) {
    passIdOne.textContent = passIdOne.textContent += pass[i];
    passIdTwo.textContent = passIdTwo.textContent += pass2[i];
  }
}

function generate() {
  passOne = [];
  passTwo = [];
  for (let i = 0; i < numbChar; i++) {
    let randomLetterOne = getRandomLetter();
    let randomLetterTwo = getRandomLetter();
    passOne.push(randomLetterOne);
    passTwo.push(randomLetterTwo);
  }
  displayPass(passOne, passTwo);
}
