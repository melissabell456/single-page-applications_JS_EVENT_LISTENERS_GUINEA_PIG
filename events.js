// -There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// -Link in a JavaScript file named events.js.
// -Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// -Output target is the output-target element.

let outputField = document.getElementById("output-target");
let sectionElements = document.getElementsByClassName("article-section");
let addColor = document.getElementById("add-color");
let makeLarge = document.getElementById("make-large");
let addBorder = document.getElementById("add-border");
let addRounding = document.getElementById("add-rounding");
let guineaPig = document.getElementById("guinea-pig");

// let allButtons = document.getElementsByTagName("button");
// for (let i = 0; i < allButtons.length; i++) {
    //     let currentButton = allButtons[i];
    //     console.log(currentButton.addEventListener("click", `${currentButton.id + "Guinea"}`));
    //     console.log(currentButton.id); 
    // }
    
    // When any section is clicked the output target text should be "You clicked on the {text of the section} section"
    // sectionElements.addEventListener("click", sectionClick);
    // function sectionClick() {
        // console.log("I am listening");
        // }
        
        addColor.addEventListener("click", addColorGuinea);
        function addColorGuinea() {
            console.log("listening");
            guineaPig.classList.toggle("blue-guinea");
        }
        // When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
        makeLarge.addEventListener("click", makeLargeGuinea);
        function makeLargeGuinea() {
            guineaPig.classList.toggle("big-guinea");
        }
        // When you click the "Capture it" button, the guinea-pig element should have a border added to it.
        
        
        // When you click the "Rounded" button, the guinea-pig element's border should become rounded.
        
        
        // When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
        // When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
        
        // When you type characters into the input field, the output element should mirror the text in the input field.