// // Learning to make variables in JavaScript
// var name = "John Doe";
// const pi = 3.14;
// let salary = 1000;
// let a = 10;
// let b = 20;

// // Learning to print values
// console.log(name);  // Output: John Doe
// console.log(pi);  // Output: 3.14
// console.log(salary);  // Output: 1000
// console.log(a + b);  // Output: 30
// console.log(a - b);  // Output: -10
// console.log(a * b);  // Output: 200
// console.log(a / b);  // Output: 0.5
// console.log(a % b);  // Output: 10

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