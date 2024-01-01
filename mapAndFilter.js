//Return only name of students who scores more than 60


let students = [
    {name : "ete",  rollNumber : 30, marks : 80},
    {name : "ete1", rollNumber : 20, marks : 70},
    {name : "ete2", rollNumber : 40, marks : 40},
    {name : "ete3", rollNumber : 10, marks : 50},
]


const names = students.filter((stu)=> stu.marks>60).map((stu) => stu.name);

console.log(names);