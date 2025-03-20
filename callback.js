
// // FUNCTIONS IN JAVASCRIPT
// // Function declaration
// function greeting() {
//     console.log("Hello World", "Welcome to JavaScript Beginners!");
// }

// // Calling the function
// greeting(); 

// // FUNCTION WITH PARAMETERS
// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20));  // Corrected Output: 30

// // Loop demonstration
// console.log("Start");

// for (let i = 0; i < 5; i++) {
//     console.log("Hello World");
// }

// console.log("End");


// console.log("Start");

// setTimeout(() => {
//     console.log("Hello World");
// },2000);

// console.log("End");

// callbacks in javaScripts 

// function great(name, callback){
//     console.log('Hello ' + name);
//     callback();
// }

// function greetMw(){
//     console.log("goodbye!!!!");
// }

// great('John Doe', greetMw);


// Basics example of callback functions in JavaScript

// function greet(name, callback){
//     console.log('Hello ' + name);
//     callback(); // calling the callback function
// }

// function sayILoveYou(){
//     console.log('I love you');
// }

// function drawHeart(){
//     console.log('<3');
// }

// greet('John Doe', sayILoveYou);


// So i had question in mind where are callbacks used the most ?


// 1. Asynchronous JavaScript (setTimeout & setInterval)

// console.log("Start");
// setTimeout(()=>("this will executes after three seconds"), 3000);
// console.log("End");

// it doesnt not block the code inststed it gtes expecuted after 3 seconds 

// 2. Handling API Requests(Fetching Data from Server)
// Like guys when requesting a server for data the Response taskes time. so call back handel the data once 
// the response is recieved.

// example fetch with a callback function

function fetchData(callback){
    setTimeout(()=>{
        console.log("Data is recieved from the server");
        callback("User Data");

    },200);

    function displayData(data){
        console.log("Display Data",data);
    }

    fetchData(displayData);
}

// watching youtube when schoolworkpro is bg handeling the user request and the data is recieved from the server . 

// function schoolWorksPro(callback,assignmet){
//     console.log("Plagiarism check is in progress");
//     setTimer(()=>{
//         console.log("plagrasium check is completed");
//         callback("Assignment Data");
//     },3000);
// }

// function duringYoutube(checking){
//     console.log("Display Data",checking);
// }

// schoolWorksPro("So you had 20% of plagiarism",duringYoutube);


// 3. Event Handling in javaScript
// callbacks are useful for handeling interaction, such as clicks , key presses, mouse movements, etc.

// example number 1
doucument.getElementById('btn').addEventListener('click',()=>{
    console.log("Button is clicked");
});

//example number 2
document.getElementById('AbiIsLive').addEventListener('click',()=>{
    console.log("Abi is live");
}
);

// example number 3
document.getElementById('Start').addEventListener('click',()=>{
    console.log("50 min Timer has started");
}
);

// if u want it to have GUI then u can use the following code:
<button id="Start">Click Me</button>


//example number 4
document.getElementById('Results').addEventListener("mouseover",()=>{
    this.style.backgrounfColor = "light red";
    
});

// HTML code for the above example
<div id="box" style="width: 100px; height: 100px; background-color: lightblue;"></div>

// example number 5: Keydown Event(Decting keypress)
document.addEventListener('keydown',function(event){
    console.log(`key pressed:${event.key}`)
}
);

// examplenumbe 6: Removing EventListener

function Youtube(){
    alert("The Gratest Study With Me Channel In Youtube");
}

document.getElementById('Subscribe').addEventListener('Click',Youtube);
    console.log("Thank you for subscribing");


setTimeout(()=>{
document.getElementById('Unsubscribe').removeEventListener('click',Youtube);
    console.log("You have unsubscribed");
},5000);

// 4 Array Methods (Higher Order Functions)

//Example 1: Using map with a callback function

const numbers = [1,2,3,4,5,6,7,8,9,10]; // Array of numbers
const double = numbers.map(num=>num*2); // Doubles each number in the array
console.log(double); // Output: [2,4,6,8,10,12,14,16,18,20]

// Example 2:

const family = ['Aanya', 'Vrindwan', 'Abrar', 'anushka']; // Array of names

const message = family.map(name=>console.log(`Love You My Family ${name}`)); // Greets each family member
console.log(family);
// Output: Hello Aanya  Hello Vrindwan  Hello Abrar  Hello Anushka

// Example 3: Using filter with a callback function

// const Gods =['Dad','Mom']/ // Array of names
// const parents =Gods.map(name=>console.log(`Love You My Family ${name}`)); // Greets each family member
// console.log(parents);
// Output: Hello Dad  Hello Mom

// Example 4: Using filter with a callback function
for (let i = 0; i < 5; i++) {
    console.log(i);
}
const num =i.filter(num=>num%2==0); // Filters numbers greater than 3
console.log(num); // Output: [4,6,8,10]

// 5 Promises & Aysnc/Await(modern Approach to callbacks)

// Example 1: romise with callback function
function fetchData(callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data is recieved from the server");
        },2000).then(callback);
    }
    );
};

function displayData(data){
    console.log("Display Data",data);
}

fetchData(displayData);// Output: Data is recieved from the server

// promise with async/await

// Example 2: Promise with async/await
function fetchdata(callback){
    return new Promise((resolve,reject)=>{
        resolve("Your Data Is Successuly Fetched");
        reject("Your Data is Not fetched Please check weather u have done any syntax error or not");
    },2000).then(callback);
}

function displayData(data){
    console.log("Your Data",data);
}

fetchData(callback);