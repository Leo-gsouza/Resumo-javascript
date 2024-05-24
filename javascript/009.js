var datas = new Date()
var anoAtual = datas.getFullYear()

function bissexto(ano){

   if (ano % 4 == 0 && ano % 100 != 0){
    return `O ano ${ano} é bissexto \n Multiplo de 4 = ${ano % 4 == 0} \n Multiplo de 100 = ${ano % 100 == 0}`
    
   }else{
     if (ano % 400 == 0){
        return `O ano ${ano} é bissexto \n Multiplo de 4 = ${ano % 4 == 0} \n Multiplo de 100 = ${ano % 100 == 0} \n Multiplo de 400 = ${ano % 400 == 0}`

     }else{
        return `O ano ${ano} não é bissexto \n Multiplo de 4 = ${ano % 4 == 0} \n Multiplo de 100 = ${ano % 100 == 0} \n Multiplo de 400 = ${ano % 400 == 0}`
    }
   }
}

console.log(bissexto(anoAtual))

