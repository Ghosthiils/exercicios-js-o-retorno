let listaDeNumeros = []


function fnLimpar() {
    document.getElementById("formulario").reset()
}


function fnSalvarNumero() {
    let numero = parseFloat(document.getElementById("numero").value)
    listaDeNumeros.push(numero)
    console.log("Funcionou? ", listaDeNumeros)

}


 function fnCalcularMedia() {
    let media = 0, qtdNumeros = 0, SomaDosNumeros =  0, i = 0
    qtdNumeros = listaDeNumeros.length
    console.log("qrdNumeros ", qtdNumeros)
    while(i<qtdNumeros) {
        SomaDosNumeros += listaDeNumeros[1]
        i++
    }
    console.log("Soma: ", SomaDosNumeros)
    media = SomaDosNumeros / qtdNumeros
    document.getElementById("media").innerHTML = media
    
}

function fnResetar() {
    
}