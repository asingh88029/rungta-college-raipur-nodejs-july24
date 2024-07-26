function MULTIPLY_BY(factor){
    let FACTOR = factor;
    const FUNC = (num)=>{
        return num * FACTOR
    }
    return FUNC
}

const MULTIPLY_BY_3 = MULTIPLY_BY(3)


console.log(MULTIPLY_BY_3(10))
console.log(MULTIPLY_BY_3(12))

const MULTIPLY_BY_5 = MULTIPLY_BY(5)

console.log(MULTIPLY_BY_5(9))
console.log(MULTIPLY_BY_5(11))