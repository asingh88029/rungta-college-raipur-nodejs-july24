var data = [
    "Mahatma Gandhi was the father of nation",
    "He was freedom fighter",
    "He having three monkeys",
    "He belongs to Gujrat",
    "He went to south africa",
    "He was very good lawyer"
]

// const essay = data.reduce((result, element)=>{
//     return result + element + ". "
// }, "")

const essay = data.join(". ")

console.log(essay)