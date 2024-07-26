// function add(num1, num2){
//     var sum = num1 + num2
//     console.log(sum)
// }

// var add = function(num1, num2){
//     console.log(num1 + num2)
// }

// var add = (num1, num2) =>console.log(num1 + num2)

// var square = num => console.log(num*num)

// add(10, 22)

// square(10)

function GENERATE_PASSWORD(length){

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz0123456789!@#%^&*()_+'

    var result = ""

    for( let i = 0; i < length; i++){
        var randomIndex = parseInt(Math.random() * chars.length)
        var randomchar = chars[randomIndex]
        result+=randomchar
    }

    return result

}

console.log(GENERATE_PASSWORD(100))