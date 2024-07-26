const data = [
  "Ankit Singh",
  26,
  [201014, "Bengaluru"],
  { tenth: "76%", twelth: "86%" },
];

const [name,age,[pincode,city],{tenth,twelth}]=data;
console.log(name,age,pincode,city,tenth,twelth);