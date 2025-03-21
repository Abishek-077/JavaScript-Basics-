// 1. what is async and await in javscript ?
// async and  await are used in asynchronous code in clean and readable way. They are built on top of promises
// making handeling operations easier tha using .then() chains.

// key Features:
// async : makes the function return a promise .
// await : pauses the execution of an async function until the promise resolves.

// 2. Why Do we Need async and wait ?

// *Callback Hell(messey code )
// Before async/await, javascript used callbacks, leading to callback


// While using the call back loop
function fetchedData(callback){
    setTimeout(()=>{
        callback("Your data is fetched");
    },2000)
};

fetchedData((data)=>{
    console.log("Your data 1:",data)
});

fetchedDat((profile)=>{
    console.log("Your Data 2:",profile)
});


// nasted call back makes the code hard to read and manitain .
// when using promise and .then()

function fetchData(){
    return new promise ((resolve, reject)=>{
        let success = true;
        
        if(success){
            resolve("Your conflits are resloved");
        }else{
            reject("Your code is not resolved");
        };
    },2000);
};

fetchData().then((data)=>{
    console.log("Your data",data)
})
.then((data1)=>{
    console.log("Your data1",data1)

})
.then((data2)=>{
    console("your data2",data2)
})

// ya ya this code is oky but still with further then code is looking messy well i know its well optimized than 
// the code with callbacks but asyncs does is muc better.


// Using Async and Await 

async function fetchData(){
    return new promise((resolve,reject)=>{
        let group = true;
        if (group){
            resolve("defentely we are going on a tour .",group)
        }else{
            reject("Sory Guyz the tour plan is dissmissed ",group)
        }
    })
}

async function getData(){
    console.log("fetching data...");
    let result1 =await fetchData();
    console.log (result1);

    let result2=await fetchData();
    console.log(result2);

    let result3= await fetchData();
    console.log(result3);
}