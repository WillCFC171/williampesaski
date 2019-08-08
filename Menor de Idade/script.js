function verificar() {
    var idade = document.getElementById('suaIdade')
    var id = Number(idade.value)
    var resultado = document.getElementById('res')
    var result = Number(resultado.value)

    if(id < 18){
        resultado.innerHTML = `Você possui ${id} anos, portanto é <strong>MENOR</strong> de idade.`
    }else{
        resultado.innerHTML = `Você possui ${id} anos, portanto é de <strong>MAIOR</strong> de idade.`
    }
    
}