function fnverificarperiodo() {
   

let periodoselecionado = document.getElementById ("periodo").value


//document.getElementById("resposta").innerText = periodoselecionado



if(periodoselecionado == "d"){
    document.getElementById("resposta").innerText = "Dia "
    document.body.style.backgroundColor = " #74c6f5"
    document.body.style.color = " #f8f7f8"
    document.getElementById("foto").src="imagens/bomDia.jpeg"
} 

else if (periodoselecionado == "t") {
    document.getElementById("resposta").innerText = "tarde"
    document.body.style.backgroundColor = " #e9981e"
    document.body.style.color =  " #000000"
    document.getElementById("foto").src="imagens/boaTarde.jpg"
    

}

else if (periodoselecionado == "n") {
    document.getElementById("resposta").innerText = "noite"
    document.body.style.backgroundColor = " #382911"
    document.body.style.color = "#ecebeb"
    document.getElementById("foto").src="imagens/boanoite.jpg"
}

else {
    document.getElementById("resposta").innerText = ""
}
}