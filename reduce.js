//Sum of marks of all student//

let students =[
    {name : "ete",  rollNumber : 30, marks :80}, 
    {name : "ete1", rollNumber : 20, marks :90},
    {name : "ete2", rollNumber : 40, marks :40},
    {name : "ete3", rollNumber : 10, marks :50},
]

let sum = students.reduce((acc,curr) => acc + curr.marks ,0);

console.log(sum);