var startTime = new Date().getTime()
console.log("line1")

setTimeout(()=>{
    const diffInMs = new Date().getTime() - startTime
    console.log("I am line4 - ", diffInMs)
}, 1000)


document.getElementById("btn").addEventListener("click", ()=>{
    const diffInMs = new Date().getTime() - startTime
    console.log("line9 - ", diffInMs)
})

console.log("line12")

fetch("https://makemytrip-backend-w2d2.onrender.com/cities").then(()=>{
    const diffInMs = new Date().getTime() - startTime
    console.log("API is fetched successfully - line15 - ", diffInMs)
})

blockingFunc(500).then((result)=>{
    const diffInMs = new Date().getTime() - startTime
    console.log("Promise is fullfilled - line19 - ", diffInMs)
    console.log(result)
}).catch(err=>{
    console.log(err)
})

console.log("line18")

function blockingFunc(time){

    const promise = new Promise((resolve, reject)=>{


        setTimeout(()=>{
            resolve({name : "Ankit", success : true})
            // reject(new Error("Error while executing blockingFunc"))
        }, time)

    })

    return promise
}