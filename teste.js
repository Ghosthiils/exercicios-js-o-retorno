const pessoa = {
    nome: "Luiz",
    idade: 21,
    sexo: "masculino"
}

detalhe(pessoa)

function detalhe({nome, idade, sexo}) {
    console.log(nome)
    console.log(idade)
    console.log(sexo)
    
}