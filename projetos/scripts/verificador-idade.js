function verificar(){
    
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascTx = document.getElementById('inascimento')
    var anoNasc = Number(anoNascTx.value)
    var resultado = document.getElementById('res')
    var idade = anoAtual - anoNasc
    var sexo = document.getElementsByName('sex')
    var genero = ''
    var img = document.getElementById('imagem')
    

    /* VERIFICAÇÃO DE ERRO DE DIGITAÇÃO DO USUARIO */
    if (anoNascTx.value.length == 0){
        window.alert('Digite o ano de nascimento!')
    }else if(anoNascTx.value > anoAtual){
        window.alert('O ano de nascimento não pode ser superior ao ano atual')
    }

    /* VERIFICAR O SEXO DIGITADO PELO USUARIO */
    if (sexo[0].checked){
        if (idade >= 0 && idade <= 2){
            img.src = '../imagens/pessoa1.png'
            genero = 'bebe'
        }else if (idade <= 10){
            img.src = '../imagens/pessoa2.png'
            genero = 'menino'
        }else if (idade <= 18){
            img.src = '../imagens/pessoa3.png'
            genero =' adolecente'
        }else if (idade <= 40){
            img.src = '../imagens/pessoa4.png'
            genero = 'homem'
        }else if (idade <= 60){
            img.src = '../imagens/pessoa5.png'
            genero ='homem'

        }else{img.src = '../imagens/pessoa6.png'
            genero = 'idoso'
        }


    }else if (sexo[1].checked){
        genero = 'Mulher'
    }

    resultado.innerHTML = `Um ${genero} de ${idade} anos`
    resultado.appendChild(img)

    







}