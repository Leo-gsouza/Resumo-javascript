var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()

switch(diaSem){
    case 0:
        var diaSem = 'Domingo'
        break
    case 1:
        var diaSem = 'Segunda'
        break
    case 2:
        var diaSem = 'Terça'
        break
    case 3:
        var diaSem = 'Quarta'
        break
    case 4:
        var diaSem = 'Quinta'
        break
    case 5:
        var diaSem = 'Sexta'
        break
    case 6:
        var diaSem = 'Sabado'
        break
    default:
        console.log('Erro!')
}

console.log(` ${diaSem} as ${hora}:${minuto}:${segundo} `)