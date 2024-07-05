/* ##### Set the logo text to the correct color ##### */
const logoText = document.querySelector(".logo-text");
console.log(logoText.style);
logoText.style.color = "#384241";
console.log("The color of the logo text is: ", logoText.style.color)


/* ##### Set the right flex property for the header ##### */
const header = document.querySelector("header");
header.style.justifyContent = "flex-start";
console.log("The flex property justify-content is: ", header.style.justifyContent)


/* ##### Set the border to the correct color ##### */
header.style.borderColor = "#d3d3d3";
console.log("The color of the header border is: ", header.style.borderColor)


/* ##### Change the recipe name ##### */
const recipeName = document.querySelector("#recipe-name");
recipeName.innerText = "Frozen Cheesecake";
console.log("The name of the recipe is: ", recipeName.innerText)


/* ##### Add the clock icon ##### */
const timerElement = document.querySelector(".time-container").firstChild;
timerElement.classList.add("material-icons");
console.log("The class of the timer span is now: ", timerElement.classList[0]);


/* ##### Change the time ##### */
const timeText = document.querySelector(".time-container").children[1];
timeText.innerText = "60+ min";
console.log("The time text now reads: ", timeText.innerText);


/* ##### Change the image ##### */
const image = document.querySelector(".image-container").firstElementChild;
image.src = "\\assets\\frozen-cheesecake-slice.jpg";
console.log("The image source is now: ", image.src);


/* ##### Change background color of the ingredients list ##### */
const ingredients = document.querySelector(".ingredients-container");
ingredients.style.backgroundColor = "#f9f9f9";
console.log("Background color of the ingredients list is now: ", ingredients.style.backgroundColor);