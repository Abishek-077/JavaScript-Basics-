// Promises (Fixing Callbacks Hell)
// 1. callback can lead to callback hell(nested, unreadable code).
//2. Promises solve this my making asynchronous code more reablle.

function fetchedData(){
    return new Promise((resolve,reject)=>{
        resolve("Data Fetched Successfully");
        reject("Sry Data Couldnt be fetched");
    });
};

fetchedData().then((data)=>{
    console.log("Your data",data);
});

// Basic Example of a Promise 
// A Promise in javascript is an object that represents the eventiual
//completion of an asynchronous operation. it has three states

// Pending -> Inital state , the operation is not completed yet.
// fullfiled -> the operation was successful, and .then() is exectuted.
// Rejected -> The Operation failed, and .catch() is executed 

const myPromise = new Promise((resolve,reject)=>{
    let success = true;

    setTimeout(()=>{
        if(success){
            console.log("Congralations you did it !")
        }else{
            console.log("sory for your failer better luck next time");
        };
    });
});

myPromise.then((result)=>{
    console.log(result); // Runs if resolved

})
.catch((error)=>{
    console.log(error);// Runs if rejected

})

const myCrush = new Promise((resolve,reject)=>{
    let appeptance = true;

    setTimeout(()=>{
        if(appeptance){
            resolve("I love you tooo !",true)
        }else{
            reject("I Hate You !",false)
        }
    },2000);

});

myCrush().then((iLoveYou)=>{
    console.log("today is by happiest day Abi, I love You Tooo...")
})
.then((soryIHaveABoyFrined)=>{
    console.log("You are sweet guy but i have a bof friend Abi..")
})


