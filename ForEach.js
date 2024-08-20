/*

    ForEach(item, index, array)

*/

const users = [
    { name: "André", age: 24, contact: "+55981765-4321" },
    { name: "Michael", age: 54, contact: "+505842-5662" },
    { name: "Sandler", age: 46, contact: "+505711-9601" },
    { name: "Walter", age: 62, contact: "+505503-4455" }

]

users.forEach( (item, index, array) => {
//    console.log(index)
//    console.log(item)
//    console.log(array)
//    console.log(item.name)
//    console.log(item.age)
//    console.log(`Name: ${item.name}, Age: ${item.age}, Contact: ${item.contact}`)
    console.log(`${index}) Name: ${item.name}, Age: ${item.age}, Contact: ${item.contact}`)


});