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

getData();

// much more cleaner ,readable and easier to understand!!!!
// so guys u might be wandering by is so that we have use async in function fetchedData() and function
// getData() but not in result it is beacause async will be requesting to response to the fetched data 
// where as  await will just wait for fetch data to response onlt then gives the result.

// 3. how does acync and await work internally 

async function mesaage(){
    return "hello world";
}

console.log(example());
// async always return the valur even its the simple value.


// clear explanation of await

async function metting(){
    setTimeout(()=>{
        console.log("Data is fetched");
    },2000);
};

async function waiting(){

    console.log("fetched data");
    const person1 = await metting();
    console.log (person1);

    const person2 = await metting();
    console.log(person2);

    const person3 = await metting();
    console.log(person3)
}

// i will be re writing the code 

async function meeting(){
    return new promise((resolve)=>{
        setTimeout(()=>{
            console.log("Google interview is ongoing");
        },2000);
        
    });
}

async function person(){
    console.log("Before fetching ")

    let person1 = await meeting();
    console.log(person1);

    let person2 =await metting();
    console.log(person2);

    let person3 = await metting();
    console.log(person3);

    console.log("After feteching..........")
}

// WorkFlow of await 
// 1. print("before fetching................")
// 2. pause at await metting for 2 secs.
// 3. prints "Data Fetched".
// 4. Prints "After fetching............"

// 5. Error Handling in async/await
// also used in try,...catch to handel error peoperly

async function fetchData(){
    return new Promise((reject)=>{
        setTimeout(()=>{
            reject("something went wrong!");
        },2000);
    });
}

async function getData(){
    try{
        console.log("fetching")

        let data = await fetchData();// this will throw an error
        console.log(data);
    }catch(error){
        console.log("Error",error)
    }
}

getData();

// 6. Running multiple await call in parallel
// instated of waiting one after another, we can run using Promise.all()

async function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("U are now memeber of elite group");
        },2000);
    });
}

async function getData(){
    console.log("Pending the fetched data......");
    const [data1,data2,data3,data4] = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);

    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4)


}

// so like in pervious example we had been calling it using async and await one by one 
// but here we promise it to call all the data with promise.all([])

//summary of async and await

