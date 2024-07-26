console.log("Line 1")

console.log("Line 2")






// BLOCKING CODE
// function blockingFunc(time){

//     const promise = new Promise((resolve, reject)=>{


//         setTimeout(()=>{
//             // resolve({name : "Ankit", success : true})
//             reject(new Error("Error while executing blockingFunc"))
//         }, time)

//     })

//     return promise
// }

// blockingFunc(10000).then((result)=>{
//     console.log("Promise is fullfilled")
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })


// fetch("https://makemytrip-backend-w2d2.onrender.com/cities").then((apiResult)=>{
//     console.log("promise is fullfiled")
//     console.log(apiResult)
// })


function sum(...params){
    return params.reduce((total, curre)=>total+curre, 0)
}

console.log(sum(1))

console.log(sum(1, 2, 3))

console.log(sum(1, 2, 3, 4))



console.log("line 19")

console.log("line 21")