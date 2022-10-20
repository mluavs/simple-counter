/* 
=========a tarefa aqui é definir valor inicial da contagem=============
*/
let count = 0;

/*
=======a tarefa aqui é selecionar o valor e os botões=======
*/

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
//se eu der um console.log()agora em btns, o que eu recebo é uma Node List, que é como se fosse um array.

/*
aqui eu poderia selecionar botão por botão, mas o caso é que a gente configuraria praticamente o mesmo eventListener pra todos eles, então um 'for' cai bem aqui.
ou seja, o for vai checar qual dos botões que foi apertado e de acordo com essa identificação, a aplicação faz o que foi setado proviamente.
*/

//em forEach a gente passa uma call back function, nessa call back function a gente passa um parâmetro que acessa item por item (esse parâmetro pode ter qualquer nome)
btns.forEach(function (item) {
    item.addEventListener("click", function (e){
    const styles = e.currentTarget.classList;

    if(styles.contains('decrease')){
        count--;
    }

    else if(styles.contains('reset')){
        count = 0
    }

    else if(styles.contains('increase')){
        count++;
    }

    if (count > 0){
        value.style.color = 'green'
    }
    if (count < 0){
        value.style.color = 'red'
    }
    if (count === 0){
        value.style.color = '#222'
    }

    value.textContent = count
    });
})