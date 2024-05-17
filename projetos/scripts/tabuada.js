
function calcular(){
    var valorTxt = document.getElementById('ivalor')
    var valor = Number(valorTxt.value)
    var resultado = document.getElementById('res')
    var cont = 1
    while (cont <= 10){
        resultado.innerHTML += `${valor} x ${cont} = ${valor*cont}`
        resultado.innerHTML += '\r\n'
        cont ++
    }
    
}
