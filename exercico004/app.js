function fnvalidaridadecnh() {



event.preventDefault()


    let nomeusuario = document.getElementById("txtnome").value
    let idadeusuario = document.getElementById("txtidade").value 


console.log(idadeusuario)

    if  (idadeusuario >= 18) {
    
        texto = "parabens " + nomeusuario +  ", voce pode dirigir"
        document.getElementById("resultado").innerHTML = texto 


    } else {
        texto = " desculpe, " + nomeusuario + "mas voce nao pode dirigir "
        document.getElementById("resultado").innerHTML = texto
    }
}