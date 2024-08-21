/*
    Functions / Funções
        Trecho de código que é executado SOMENTE quando é chamado.
            Funções podem receber argumentos ou parâmetros.
*/

function sayMyName(name) {  //function sayMyName(name = "default value")
    console.log(`O nome é: ${name}`)
}

sayMyName("André")
sayMyName("Mark")
sayMyName("Albert")

function sum(value, value2) {
    console.log(value + value2)
}

sum(2, 3)
sum(3, 4)
sum(5, 6)