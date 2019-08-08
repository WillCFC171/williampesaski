function media() {
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let res = document.getElementById('res')

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let m = (n1 + n2)/2

    res.innerHTML = `A média do aluno é de ${m}`
}