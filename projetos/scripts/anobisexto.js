
function verificar(ano){
    var anoTx = document.getElementById('iano')
    var ano = Number(anoTx.value)
    var resultado = document.getElementById('res')

    if (ano % 4 == 0 && ano % 100 != 0){
     resultado.innerHTML = `<h2>O ano ${ano} é bissexto</h2>  <p>Multiplo de 4 = ${ano % 4 == 0}</p>  <p>Multiplo de 100 = ${ano % 100 == 0}</p>`
     
    }else{
      if (ano % 400 == 0){
         resultado.innerHTML = `<h2>O ano ${ano} é bissexto</h2> <p>Multiplo de 4 = ${ano % 4 == 0}</p> <p>Multiplo de 100 = ${ano % 100 == 0}</p> <p>Multiplo de 400 = ${ano % 400 == 0}</p>`
 
      }else{
         resultado.innerHTML = `<h2>O ano ${ano} não é bissexto</h2> <p>Multiplo de 4 = ${ano % 4 == 0}</p>  <p>Multiplo de 100 = ${ano % 100 == 0}</p>  <p>Multiplo de 400 = ${ano % 400 == 0}</p>`
     }
    }
 }
 
 