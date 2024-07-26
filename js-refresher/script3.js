var data1 = [
    "Node_Batch",
    ["Ankit Singh", "Yash Raj"],
    {
        duration : 28
    },
    false
]

var data2= JSON.parse(JSON.stringify(data1))

data2[1][0] = "Swati Priya"

console.log(data1)

console.log(data2)