function gerar() {
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let salario = document.getElementById('salario').value
    let res = document.getElementById('res')

    res.innerHTML = `Seu nome é: ${nome}, você tem ${idade} anos e recebe R$: ${salario}`

    
}