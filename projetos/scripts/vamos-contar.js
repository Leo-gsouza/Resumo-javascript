
function calcular(){
    /* Formato de Texto */
    var inicioTxt = document.getElementById('iinicio')
    var fimTxt = document.getElementById('ifim')
    var passoTxt = document.getElementById('ipasso')
    /* Convertendo para Number */
    var inicio = Number(inicioTxt.value)
    var fim = Number(fimTxt.value)
    var passo = Number(passoTxt.value)
    /* Div com resultado */
    var resultado = document.getElementById('res')
    var calculos = ''

    resultado.style.display = 'block'
    resultado.style.textAlign = 'center'


    if (passo < 1 && passo == ''){
        window.alert('passo vazio ou igual a 0 recebe o valor = 1')
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
        
    }else{calculos += '<h1>Inicio</h1>'
    for (inicio ; inicio <= fim; inicio+=passo)
        calculos += `<p id='number'> ${inicio} </p>`

    calculos += '<h1>Fim!</h1>'
    resultado.innerHTML = calculos
    }
}

