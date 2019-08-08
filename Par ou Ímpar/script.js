function calcular() {
    var numero = document.getElementById('numero')
    var n = Number(numero.value)
    var res = document.getElementById('res')
    var resultado = Number(res.value)  
    
    if (n % 2 == 0) {
        res.innerHTML = 'Par'
    } else {
        res.innerHTML = 'Ímpar'
    }

}