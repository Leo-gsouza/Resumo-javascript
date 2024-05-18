
function calcular(){
    var valorTxt = document.getElementById('ivalor')
    var valor = Number(valorTxt.value)
    var resultado = document.getElementById('res')
    var cont = 1
    var calculos = ''

    resultado.style.display = 'block'

    if (valor == ''){
        window.alert('Insira um valor!')
        resultado.style.display = 'none'
    }else {while (cont <= 10){
        if (cont < 10){
            calculos += `<p>${valor} x 0${cont} = ${valor*cont}</p>`
            cont ++
        }else{calculos += `<p>${valor} x ${cont} = ${valor*cont}</p>`
        cont ++}
        resultado.innerHTML = calculos
    }}   
    
}
