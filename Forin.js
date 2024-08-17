/*
    Estrutura de Repetição -LOOP
        FOR IN -> Interage sobre propriedades na ordem original de inserção
*/

const user = { name:"André", age: 24, country: "Brazil"}

for (const key in user) {
    console.log(key + user[key])
    }

    for (const key in user) {
        console.log(key + " : " + user[key])
        }

        for (const key in user) {
            console.log(`${key} : ${user[key]}`)
            }
