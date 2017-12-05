let outputField = document.getElementById("output-target");
let sectionElements = document.getElementsByClassName("article-section");
let addColor = document.getElementById("add-color");
let makeLarge = document.getElementById("make-large");
let addBorder = document.getElementById("add-border");
let addRounding = document.getElementById("add-rounding");
let guineaPig = document.getElementById("guinea-pig");
let pageHeader = document.getElementById("page-title");
let inputField = document.getElementById("keypress-input");

// let allButtons = document.getElementsByTagName("button");
// for (let i = 0; i < allButtons.length; i++) {
    //     let currentButton = allButtons[i];
    //     console.log(currentButton.addEventListener("click", `${currentButton.id + "Guinea"}`));
    //     console.log(currentButton.id); 
    // }

for (i = 0; i < sectionElements.length; i++) {
    sectionElements[i].addEventListener("click", sectionClick);
}
function sectionClick(event) {
    let sectionText = event.currentTarget.innerHTML;
    outputField.innerHTML = `You clicked on the ${sectionText} section`;
}
        
addColor.addEventListener("click", addColorGuinea);
function addColorGuinea() {
    guineaPig.classList.toggle("blue-guinea");
}

makeLarge.addEventListener("click", makeLargeGuinea);
function makeLargeGuinea() {
    guineaPig.classList.toggle("big-guinea");
}

addBorder.addEventListener("click", addBorderGuinea);
function addBorderGuinea() {
    guineaPig.classList.toggle("bordered-guinea");
}

addRounding.addEventListener("click", addRoundingGuinea);
function addRoundingGuinea () {
    guineaPig.classList.toggle("rounded-guinea");
}

pageHeader.addEventListener("mouseover", pageHeaderHoverResponse);
function pageHeaderHoverResponse () {
    outputField.innerText="You moved your mouse over the header";
}

pageHeader.addEventListener("mouseleave", pageHeaderLeaveResponse);
function pageHeaderLeaveResponse () {
    outputField.innerText="You left me!!";
}

inputField.addEventListener("input", mirrorInputToOutput);
function mirrorInputToOutput() {
    outputField.innerText=inputField.value;
}
