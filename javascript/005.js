var fatia = 16

function comerPizza(fatia){
    while (fatia > 0){
        console.log('comendo uma fatia hum.....')
        fatia -=1
        console.log (`Restam ${fatia} fatias`)
    }
    console.log('Acabou! Delicia')
}

console.log(comerPizza(16))