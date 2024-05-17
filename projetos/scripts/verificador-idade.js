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
    var caixa = document.getElementById('caixa')
    var titulo = document.getElementById('titulo')
    

    /* VERIFICAÇÃO DE ERRO DE DIGITAÇÃO DO USUARIO */
    if (anoNascTx.value.length == 0){
        window.alert('Digite o ano de nascimento!')
    }else if(anoNascTx.value > anoAtual){
        window.alert('O ano de nascimento não pode ser superior ao ano atual')
    }else{
        if (sexo[0].checked){/* Se o sexo for masculino */
            caixa.style.background = '#0897B4'
            document.body.style.backgroundImage = "url('../imagens/fundo-homem.png')"
            caixa.style.color = 'white'
            titulo.style.color = 'transparent'
            titulo.style.textShadow = 'none'
            if (idade >= 0 && idade <= 2){
                img.src = '../imagens/pessoa1.png'
                genero = 'bebe'
            }else if (idade <= 10){
                img.src = '../imagens/pessoa2.png'
                genero = 'menino'
            }else if (idade <= 25){
                img.src = '../imagens/pessoa3.png'
                genero =' adolecente'
            }else if (idade <= 45){
                img.src = '../imagens/pessoa4.png'
                genero = 'homem'
            }else if (idade <= 65){
                img.src = '../imagens/pessoa5.png'
                genero ='homem'

            }else{img.src = '../imagens/pessoa6.png'
                genero = 'idoso'
            }
            

        }else if (sexo[1].checked){
            caixa.style.background = '#AC4568'
            caixa.style.color = 'white'
            document.body.style.backgroundImage = "url('../imagens/fundo-mulher.jpg')"
            titulo.style.color = 'transparent'
            titulo.style.textShadow = 'none'

            if (idade <= 2){
                img.src = '../imagens/mulher1.png'
                genero = 'bebe'
                
            }else if (idade <= 10){
                genero = 'menina'
                img.src = '../imagens/mulher2.png'
                
            }else if (idade <= 25){
                genero = 'adolecente'
                img.src = '../imagens/mulher3.png'
                
            }else if (idade <= 45){
                genero = 'mulher'
                img.src = '../imagens/mulher4.png'
                
            }else if (idade <= 65){
                genero = 'mulher'
                img.src = '../imagens/mulher5.png'
                
            }else{
                genero = 'idosa'
                img.src = '../imagens/mulher6.png'
            }  
        }

        if (sexo[0].checked){
            resultado.innerHTML = `Um ${genero} de ${idade} ano(s)`
    
        }else if (sexo[1].checked){
            resultado.innerHTML = `Uma ${genero} de ${idade} ano(s)`
        }
        resultado.appendChild(img)
    }

}