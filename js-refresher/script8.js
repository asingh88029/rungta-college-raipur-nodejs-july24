// const a = function(){
//     console.log("I am a")
// }

// function b(x){
//     x()
// }

// b(a)


// const greet = (name)=>{
//     console.log("Good Morning ", name)
// }

// Tak_To_Ankit is HOF
// function Talk_To_Ankit(cb){
//     cb("Ankit")
// }

// Talk_To_Ankit(greet)

// x is HOF
function x(){
    function hello(){
        console.log("hello")
    }
    return hello
}

var result = x()
result()