/* ##### Get the name of the recipe ##### */
const recipeName = document.querySelector("#recipe-name");
console.log("The name of the recipe is: ", recipeName.innerText);


/* ##### Get HTML tag for recipe name ##### */
console.log("The tag of the recipe name is: ", recipeName.tagName);


/* ##### Get font size from paragraph with description class ##### */
const description = document.querySelector(".description");
console.log("The font size of the description is: ", window.getComputedStyle(description).fontSize);


/* ##### Get alt size of the image ##### */
const image = document.querySelector(".image-container").firstElementChild;
console.log("The font size of the description is: ", image.alt);


/* ##### Get the (original) dimensions and url of the image ##### */
// To get the current dimensions, simply use image.height and image.width instead.
const imageSrc = document.createElement("img");
imageSrc.src = image.src;
const imageInformation =
{
    url: image.src,
    height: imageSrc.height,
    width: imageSrc.width,
}
console.log("Information on the image: ", imageInformation)


/* ##### Number of ingredients in the paste ##### */
const pasteIngredients = document.querySelector(".ingredients-list-paste");
console.log("Number of ingredients in the paste: ", pasteIngredients.children.length);


/* ##### Fourth ingredient in the paste ##### */
console.log("Fourth ingredient in the paste: ", pasteIngredients.children[3], " with the innerText: ", pasteIngredients.children[3].innerText);


/* ##### Create an array of objects containing the instructions ##### */
const instructions = document.querySelector(".instructions-list");
console.log(instructions.children);
const instructionObjects = [];
for(let i = 0; i < instructions.children.length; i++)
{
    instructionObjects[i] =
    {
        order: i + 1,
        text: instructions.children[i].innerText,
    }
}
console.log(instructionObjects);