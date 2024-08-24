/*
    Arrow / Functions

    function padrão -> function () {}
    arrow ->    () => {}

    Não escrevemos "function".
    Usamos o sinal "=>" para criá-la, 
    o que lembra uma flecha, fazendo jus ao nome "Arrow functions".

*/

function sayMyName(name){
    return `Seu nome é ${name}`
}

// Automaticamente tem um return, somente um parametro não precisa de ()
const sayMyName2 = name => `Seu nome é ${name}`

console.log(sayMyName("André"))
console.log(sayMyName2("Antonio"))