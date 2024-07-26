var student1_details = {
    name : "Ankit Singh",
    age : 26,
    city : "Bangalore",
    ctc : 100,
    address : {
        pincode : 201014,
        state : "Tamilnadu"
    }
}

// var student2_details = student1_details

// var student2_details = {...student1_details}

var student2_details = JSON.parse(JSON.stringify(student1_details))

student2_details.name = "Nikesh Jha"

student2_details.address.pincode = 452277

console.log("student1_details", student1_details)

console.log("student2_details", student2_details)