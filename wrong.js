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


/* ##### Remove the text in the bottom ingredients and add the missing list items ##### */
const bottomIngredients = document.querySelector(".ingredients-list-bottom");
bottomIngredients.removeChild(bottomIngredients.firstElementChild);
for (let i = 0; i < 2; i++)
{
    bottomIngredients.appendChild(document.createElement("li"));
}
bottomIngredients.children[0].innerText = "15st digistivetex";
bottomIngredients.children[1].innerText = "Lite smör";
console.log("The bottom ingredients are now: ", bottomIngredients.children[0].innerText, ",", bottomIngredients.children[1].innerText);


/* ##### Change the third paste ingredient ##### */
const pasteIngredients = document.querySelector(".ingredients-list-paste");
const newIngredient = document.createElement("li");
newIngredient.innerText = "3tsk vaniljsocker"
pasteIngredients.replaceChild(newIngredient, pasteIngredients.children[2])
console.log("The third paste ingredient is now: ", pasteIngredients.children[2].innerText);


/* ##### Add the missing paste ingredient ##### */
const anotherIngredient = document.createElement("li");
anotherIngredient.innerText = "400g naturell philadelphiaost"
pasteIngredients.insertAdjacentElement("beforeend", anotherIngredient);
console.log("The missing ingredient: ", pasteIngredients.children[4].innerText, "has been added.");


/* ##### Remove the styling on the instructions header ##### */
const instructionsHeader = document.querySelector(".instructions-container").firstElementChild;
instructionsHeader.classList.remove("shadow");
console.log("Instructions header class list: ", instructionsHeader.classList);


/* ##### Change two list elements to the correct ones ##### */
const instructions = document.querySelector(".instructions-list");
const firstElementToChange = instructions.children[1];
const secondElementToChange = instructions.children[8];
firstElementToChange.innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
secondElementToChange.innerText = "Ställ in i frysen över natten.";
console.log("", firstElementToChange.innerText, secondElementToChange.innerText);