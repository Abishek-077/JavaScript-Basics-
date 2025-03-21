// Youtube: AbiIsLive
// JavaScript DOM Manipulation & Events -Step-by-Steo course 

// 1. Understanding the DOM (Document Object Model)
// * what is DOM ?
// The Dom is a Strucured tree representation of an HTML document.
// JavaScript can access,manuplate,modify HTML emlements usinf the Dom 

// Visualizing the DOM
// <!DOCTYPE html>
// <html>
// <head>
//     <title>DOM Example</title>
// </head>
// <body>
//     <h1 id="title">Hello, World!</h1>
//     <p class="message">This is a paragraph.</p>
//     <button id="btn">Click Me</button>
// </body>
// </html>

// Accessing the DOM 
// javaScript interacts with the DOM using Document object.

// 2. Selecting Element(DOM  Traversal)
// We Need Dom Selectors to target elements.

// Selecting Elements by ID

// let title =document.getElementById("title")
// console.log(title)  //<h1 id="title">Hello, World</h1>

// best for : selecting a single unique element. 

//Selecting elements by Class Name

let paragraph =document.getElementById("message");
console,log(paragraphs);  // HTMLCollection(1) [p.message]

// Selecting Elements by Tag Name[
let allPragrphs = document.getElementsByTagName("p");
console.log(allPragraphs); // HTMLcollections of all <p> elements

// Using querySecletor() and querySelectorAll()  (Most Used)

let fistparagraph =document.querySelector(".message");
console.log("First Paragraph");

let allPragraphs = document.querySelectorAll("p");
console.log(allPragraphs)

// 3. Modifying in the DOM.
// Now let's chnage text, style and attributes  dynamicallly.

let title =document.getElementById("title");
title.textContent="welcome to JavaScript DOM!";
title.innerText ="InnerText works too!!!!";

// chnagiong HTML Content

let paragraph1 = document.querySelector(".message");
paragraph.innerHTML = "<strong>This is bold text.</strong>";
//let you add HTML inside an element

// Changing CSS Styles

let  button =document.getElementById("btn");
button.style.backgroundColor="bule";
button.style.color="Orange";
button.style.fontSize="20px";

let button = document.getElementById("Click Me");
button.style.backgroundColor="red";
button.style.color =("green");
button.style.fontSize= "23px"


// Adding And Removing Css Classes

let title = document.getElementById("title");

//add a class
title.classList.add("new-class");

// remove a class
title.classList.remove("new-class");

// Toggle a class (add if not present, remoc=ve if present)
title.classList.toggle("darkmode");

// Creating and removing elemnts 

// 4. creating & removing Elemnts
// * Creating a New Elements 


let newdiv = document.createElement("div");
newdiv.textContent("kIts new Div");
newdiv.appendChild(newdiv);

// common key elemnets .

// Removing an Element
let title = document.getElementById("title");
title.remove();


// 5. Hnadleing Events (User Interations)
//events allows us the user actions like clicks key presses,etc.

//* Adding Evnts Liatners
let button = document.getElementById("btn");
button.addEventListener("click",function(){
    alert("Button Clicked");
})

// Common Evnts Types 

//Events Type click, mouseover,mouseout,keydown,keyup,chnage,summit

//Mouse vents example

let button = document.getElementById("btn");
button.addEventListener("mouseover",function(){
    button.style.background ="red";

});

button.addEventListener("mouseout",function(){
    button.style.background="yellow";
})
