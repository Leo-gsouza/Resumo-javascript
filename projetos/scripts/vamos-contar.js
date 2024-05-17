
function calcular(){
    var inicioTxt = document.getElementById('iinicio')
    var fimTxt = document.getElementById('ifim')
    var passoTxt = document.getElementById('ipasso')
    var inicio = Number(inicioTxt.value)
    var fim = Number(fimTxt.value)
    var passo = Number(passoTxt.value)
    var resultado = document.getElementById('res')
    var calculos = ''

    resultado.style.display = 'block'
    resultado.style.textAlign = 'center'

    if(fim < inicio){
        window.alert('O Inicio não pode ser menor que o fim!')
        
    }else{calculos += 'Inicio'
    for (inicio ; inicio <= fim; inicio+=passo)
        calculos += `<p> ${inicio} </p>`

    calculos += 'Fim!'
    resultado.innerHTML = calculos
    }
}