/* LAÇOS (ESTRUTURA DE REPETIÇÃO) = LOOP

    - FOR
        1) INICIALIZAÇÃO -> Criar uma variavel ee colocar um valor inicial para ela
        2) CONDIÇÃO ->  Enquanto for true, o laço continuara iterando.
                        Ele irá verificarantes de cada iteração.
        3) EXPRESSÃO FINAL -> O que irá ocorrer a cada vez que o nosso laço der uma volta.

        for ([inicialização]; [condição]; [expressão final]){
            Meu código aqui
        }
*/

for (let i = 0; i < 30; i++) {
    console.log(i)
}

const users = ['André', 'Pedro', 'Lucas', 'Felipe', 'Dudu', 'Léo','Hermes', 'Cabeça', 'Eduardo']

for(let i = 0; i < users.length; i++){
    console.log(users[i])
}