function tabuada(numero, multiplicador){
    cont = 1
    while (cont < multiplicador + 1){
        console.log(`${numero} x ${cont} = ${numero*cont}`)
        cont ++
    }
}
tabuada(4, 100)