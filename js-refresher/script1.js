var student1_details = ["Ankit Singh", 26, "Bangalore", false, 100]

// var student2_details = JSON.parse(JSON.stringify(student1_details))

var student2_details = [...student1_details]

student2_details[0] = "Nikesh Jha"

console.log("student1_details", student1_details)

console.log("student2_details", student2_details)