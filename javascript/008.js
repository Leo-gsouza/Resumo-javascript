
let automoveis = ['uno', 'gol', 'palio', 'etios', 'mobi']

automoveis[5] = 'celta'
automoveis.push('up')
automoveis.sort()
qtdd = automoveis.length

console.log(`A lista contem um total de ${qtdd} automoveis, sendo eles:`)
console.log('-----------------------------------------------')

/* Mostrando cada elemento dentro da lista usando for */
for(contador = 0; contador < qtdd; contador++){
    console.log(`${contador+1}º » ${automoveis[contador]}`)
    console.log('-------------------------------------')
}

/* Mostrando cada elemento dentro da lista usando for in */
for(contador in automoveis){
    console.log(`${contador}º » ${automoveis[contador]}`)
    console.log('-------------------------------------')
}

console.log(automoveis.indexOf('uno'))/* Retornar 5 que é a posição de uno dentro da lista */
console.log(automoveis.indexOf('savero'))/* Retornar -1 pois o elemento savero não existe dentro da lista */

