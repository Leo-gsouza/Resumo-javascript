
let tensao = function(p=0, c=0, r=0){
    if(p > 0 && c > 0 && r > 0){
        console.log('Insira apenas duas grandezas')
    }else if( p == 0 && c == 0 && r == 0)
        console.log('Não inseriu nenhuma grandeza')

    if(p == 0 && c == 0 && r > 0){
        console.log('Você inseriu apenas uma grandeza = Resistencia')
    }else if (p == 0 && c > 0 && r == 0){
        console.log('Você inseriu apenas uma grandeza = Corrente')
    }else if( p > 0 && c == 0 && r == 0){
        console.log('Você inseriu apenas uma grandeza = Potencia')
    }

    if(p > 0 && c > 0 && r == 0){
        volt = p/c
    }else if( p > 0 && r > 0 && c == 0){
        volt = (p**0.5)*(r**0.5)
    }else if(c > 0 && r > 0 && p == 0){
        volt = c*r
    }else{
        volt = 0
    }

    return `Tensão elétrica = ${volt.toFixed(0)}(V) `
}

/* Chamar a função na variavel */

console.log(tensao(7700, 32))/* usando Pot e Cor */
console.log(tensao(7700, 0, 7.5))/*  usando Pot e Res */
console.log(tensao(0, 32, 7.5))/* usando Cor e Res */

console.log(tensao(7700, 32, 7.5))/* Inserindo 3 grandezas e gerando erro */
console.log(tensao())/* Não inserindo nenhuma grandeza e gerando erro */
console.log(tensao(7700))/* Inserindo apenas a potencia e gerando erro */
console.log(tensao(0, 5))/* Inserindo apenas a corrente e gerando erro */
console.log(tensao(0, 0, 8))/* Inserindo apenas a resistencia e gerando erro */


