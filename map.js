
//Return only name of the students in Capital//


let students = [
    {name: "ete",  rollNumber : 30, marks :80},
    {name: "ete1", rollNumber : 70, marks :50},
    {name: "ete2", rollNumber : 20, marks :40},
    {name: "ete3", rollNumber : 10, marks :70},
]

const names = students.map((stu)=>stu.name.toUpperCase());

console.log(names);