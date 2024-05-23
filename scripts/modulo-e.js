
function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{itens.style.display = 'block'}
}

function visivel_01(){
    if (um.style.display == 'block'){
        um.style.display = 'none'
    }else{
        um.style.display = 'block'
        dois.style.display = 'none'
        tres.style.display = 'none'
        quatro.style.display = 'none'
    }
}

function visivel_02(){
    if (dois.style.display == 'block'){
        dois.style.display = 'none'
    }else{dois.style.display = 'block'
        um.style.display = 'none'
        tres.style.display = 'none'
        quatro.style.display = 'none'
    }
}

function visivel_03(){
    if (tres.style.display == 'block'){
        tres.style.display = 'none'
    }else{tres.style.display = 'block'
        um.style.display = 'none'
        dois.style.display = 'none'
        quatro.style.display = 'none'
    }
}

function visivel_04(){
    if(quatro.style.display == 'block'){
        quatro.style.display = 'none'
    }else{quatro.style.display = 'block'
        um.style.display = 'none'
        dois.style.display = 'none'
        tres.style.display = 'none'
    }
}

