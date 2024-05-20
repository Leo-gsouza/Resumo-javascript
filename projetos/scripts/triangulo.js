
var ladoATx = document.getElementById('lado-a')
var ladoBTx = document.getElementById('lado-b')
var ladoCTx = document.getElementById('lado-c')

var resultado = document.getElementById('res')
var foto = document.getElementById('foto')
var img = document.getElementById('imagem')
var cabeca = document.getElementById('cabeça')
var triangulo = ''

function calcular(){
    let ladoA = Number(ladoATx.value)
    let ladoB = Number(ladoBTx.value)
    let ladoC = Number(ladoCTx.value)

    img.style.display = 'block'
    resultado.style.display = 'block'

    if (ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA){
        triangulo = `<h1>ERRO</h1><p>Quando a soma entre dois lados é menor que o lado restante não é possivel formar um triangulo</p>`
        img.style.display = 'none'
        resultado.style.background = 'darkred'
        cabeca.style.background = 'darkred'
    }else{
        if (ladoA == ladoB && ladoA == ladoC){
            triangulo = `<h1>Equilatero</h1><p>Quando todos os lados são iguais</p>`
            img.src = '../imagens/equilatero.png'
            resultado.style.background ='#396303'
            cabeca.style.background ='#396303'
        
        }else if(ladoA == ladoB && ladoA != ladoC || ladoA == ladoC && ladoA != ladoB || ladoB == ladoC && ladoB != ladoA){
            triangulo = `<h1>Isosceles</h1><p>Quando dois lados são iguais</p>`
            img.src = '../imagens/isosceles.png'
            resultado.style.background = '#0030A6'
            cabeca.style.background = '#0030A6'

        }else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
            triangulo = `<h1>Escaleno</h1><p>Quando todos os lados são diferentes</p>`
            img.src = '../imagens/escaleno.png'
            resultado.style.background = '#751974'
            cabeca.style.background = '#751974'
        }
    }

    resultado.innerHTML = `${triangulo}`
    foto.appendChild(img)
}