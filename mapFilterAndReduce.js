
//Return total marks for students with marks greater than 60 after 20 marks has been added those who scored less than 60 //

let students = [
    {name : "ete",  rollNumber : 30, marks : 80},
    {name : "ete1", rollNumber : 20, marks : 70},
    {name : "ete2", rollNumber : 40, marks : 40},
    {name : "ete3", rollNumber : 10, marks : 50},
]


const total = students.map((stu)=>{
     if(stu.marks<60){
     stu.marks += 20
    }
     return stu;
     })
     .filter((stu)=>stu.marks>60)
     .reduce((acc,curr)=>acc+curr.marks,0);



console.log(total);