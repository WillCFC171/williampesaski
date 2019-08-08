function verificar() {
    var mult = document.getElementById('multiplo')
    var resultado = document.getElementById('res')
    var m = Number(mult.value)
    var r = Number(resultado.value)
    if(m % 3 == 0 && m % 5 == 0){
    resultado.innerHTML = `O ${m} é múltiplo de 3 e de 5`
    }else if(m % 3 == 0){
        resultado.innerHTML = `O ${m} é múltiplo de 3.`
    }else if(m % 5 == 0){
        resultado.innerHTML = `O ${m} é múltiplo de 5.`
    }else{
        resultado.innerHTML = `O ${m} não é múltiplo de 3 e nem de 5.`
    }
}