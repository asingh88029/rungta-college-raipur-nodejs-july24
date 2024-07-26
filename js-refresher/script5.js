var data = {
    name : "Ankit Singh",
    city : "Bangalore",
    marks : {
        tenth : "72%",
        twelth : "84%"
    }
}

var {city, name, marks : {tenth : tenth_marks, twelth}} = data

// var name = data.name
// var tenth = data.marks.tenth
// var twelth = data.marks.twelth
// var city = data.city

console.log(name, tenth_marks, twelth, city)