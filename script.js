

let nameInput = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");

if (nameInput && greeting) {
  nameInput.addEventListener("input", function () {
    let name = nameInput.value || "";

    let capitalized = name.charAt(0).toUpperCase() + name.slice(1);

    if (name.trim() === "") {
      greeting.textContent = "Hello, Friend!";
      greeting.style.color = "black";
      greeting.style.fontWeight = "normal";
    } else {
      greeting.textContent = "Hello, " + capitalized + "!";
      greeting.style.color = "green";
      greeting.style.fontWeight = "bold";
    }
  });
}


let moodBox = document.getElementById("moodBox");
let growBtn = document.getElementById("growBtn");
let shrinkBtn = document.getElementById("shrinkBtn");


moodBox.style.width = "100px";
moodBox.style.height = "100px";
moodBox.style.backgroundColor = "purple";
moodBox.style.textAlign = "center";
moodBox.style.lineHeight = "100px";
moodBox.style.marginBottom = "10px";

growBtn.addEventListener("click", function () {
  moodBox.style.width = parseInt(moodBox.style.width) + 30 + "px";
  moodBox.style.height = parseInt(moodBox.style.height) + 30 + "px";
  moodBox.style.lineHeight = moodBox.style.height;
});

shrinkBtn.addEventListener("click", function () {
  moodBox.style.width = parseInt(moodBox.style.width) - 30 + "px";
  moodBox.style.height = parseInt(moodBox.style.height) - 30 + "px";
  moodBox.style.lineHeight = moodBox.style.height;
});


let toggleModeBtn = document.getElementById("toggleModeBtn");
let isNight = false;

toggleModeBtn.addEventListener("click", function () {
  if (isNight) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    isNight = false;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    isNight = true;
  }
});


let secretBtn = document.getElementById("secretBtn");
let secretMessage = document.getElementById("secretMessage");

secretBtn.addEventListener("click", function () {
  if (secretMessage.style.display === "none") {
    secretMessage.style.display = "block";
  } else {
    secretMessage.style.display = "none";
  }
});


/*
  What is the difference between .innerHTML and .innerText?
   .innerHTML allows you to set or get the HTML content inside an element, including HTML tags
   .innerText only sets or gets the text content, treating HTML tags as plain text
  Example: 
  element.innerHTML = "<b>REX</b>" // displays as bold text: REX
  element.innerText = "<b>REX</b>" // displays literally as: <b>REX</b>
*/