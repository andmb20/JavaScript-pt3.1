/*
    Functions / Funções
    Função void(vazia), não retorna NADA.
    Função return, retorna um valor para quem chamou a função.
*/

function sum(value, value2) { //void
    console.log(value + value2)
}

function soma(value, value2) {
    return value + value2
}

const result = sum(2, 3)

const res = soma(2, 4)
console.log("O resultado é: " + res)