const students = [
    {id : 23, name : "Sabbir"},
    {id : 45, name : "Solaiman"},
    {id : 76, name : "Shadhin"},
    {id : 34, name : "Shahed"}  
];

 //using map
const names = students.map(s => s.name)
console.log(names)

const ids = students.filter(s => s.id>40)
console.log(ids)

const biggerOneId = students.find(s => s.id>40)
console.log(biggerOneId)


//normal way: using for loop

/*const result = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    result.push(element.id);
}
console.log(result)*/