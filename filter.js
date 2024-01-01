// Return only details of those who scored more than 60 mark and roll number is more than 15//



let students = [
    {name : "ete", rollNumber : 31, marks : 80 },
    {name : "ete1", rollNumber : 10, marks : 69 },
    {name : "ete2", rollNumber : 32, marks : 55 },
    {name : "ete3", rollNumber : 33, marks : 71 },
]

const details = students.filter((stu)=> stu.marks > 60 && stu.rollNumber >15)

console.log(details);