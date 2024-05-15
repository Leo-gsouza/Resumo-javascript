function carregar(){
    var titulo = window.document.getElementById('titulo')
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('fundo')
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var dia = data.getDate()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    mensagem.innerHTML = `${dia}/0${mes+1}/${ano} às ${hora}:${minuto}:${segundo} `

    if (hora >= 0 && hora < 12){/* BOM DIA */
        imagem.src ='../imagens/manha.png'
        document.body.style.backgroundImage = "url('../imagens/dia-desfoque.jpg')"
        titulo.innerHTML ='Bom Dia'
        titulo.style.color = 'white'

    } else if( hora >= 12 && hora < 18){/* BOA TARDE */
        imagem.src = '../imagens/tarde.png'
        document.body.style.backgroundImage = "url('../imagens/tarde-desfoque.jpg')"
        titulo.innerHTML = 'Boa tarde'
        titulo.style.color = 'white'
        titulo.style.textShadow = '0px 0px 5px black'

    } else if ( hora >= 18){/* BOA NOITE */
        imagem.src = '../imagens/noite.png'
        fundo.style.backgroundImage = "url('../imagens/noite-desfoque.jpg')"
        titulo.innerHTML = 'Boa Noite'
        titulo.style.color = '#FBF39E'
    }
}