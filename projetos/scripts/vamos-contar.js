
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

    if (passo < 1 && passo == ''){
        window.alert('passo vazio ou menor que 1 recebe o valor = 1')
        passo = 1
    }

    if (inicio == ''){
        window.alert('Inicio vazio = 0')
        inicio = 0
    }

    if (fim == ''){
        window.alert('Fim vazio = 50')
        fim = 50
    }

    if(fim < inicio){
        window.alert('O Inicio não pode ser maior que o fim!')
        
    }else{calculos += 'Inicio'
    for (inicio ; inicio <= fim; inicio+=passo)
        calculos += `<p> ${inicio} </p>`

    calculos += 'Fim!'
    resultado.innerHTML = calculos
    }
}