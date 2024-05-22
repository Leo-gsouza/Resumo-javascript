
function gerar(){
    let numeroTx = document.getElementById('numTx')
    let tabuada = document.getElementById('seltab')
    let numero = Number(numeroTx.value)
    let contador = 1

    if(numero == ''){
        window.alert('Insira um número')
    }else{
        tabuada.innerHTML = ''
        tabuada.style.display = 'block'
        for(contador; contador <= 10; contador++ ){

        /* Criando um OPTION usando JAVASCRIPT */
        let opcao = document.createElement('option')/* OPCAO é a variavel criada para a tag OPTION */
        opcao.innerHTML = `${numero} x ${contador} = ${numero*contador}`

        /* Criar um valor para cada item dentro do OPTION */
        opcao.value = `tab${contador}`

        /* variavel TABUADA carrega o SELECT#seltab e dentro será inserido o OPTION criado por JAVASCRIPT */
        tabuada.appendChild(opcao)

        }
    }
}