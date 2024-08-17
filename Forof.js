/*
    Estrutura de Repetição - LOOP
        FOR OF -> Iterar sobre os valores de um objeto iterável, como: Arrays, Strings, entre outros
*/

const myName = "André"
const users = ["João", "Maria", "José"]

for (const letter of myName) {
    console.log(letter)
}

for (const name of users) {
    console.log(name)
}