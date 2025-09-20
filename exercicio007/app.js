let dataatual = new Date()
console.log(dataatual.getDay())

let diadasemana = dataatual.getDay()


if (dataatual.getDay() == 0) {
    document.getElementById("resposta").innerText = "domingo"
}


else if(diadasemana == 1) {
    document.getElementById("resposta").innerText = "Segunda-feira"

}

else  if(diadasemana == 2) {
    document.getElementById("reposta").innerText = "Terça-feira"
}

else if(diadasemana == 3) {
    document.getElementById("resposta").innerText = "Quarta-feira"
}

else if(diadasemana == 4) {
    document.getElementById("resposta").innerText = "Quinta-feira"
} 

else if(diadasemana == 5) {
    document.getElementById("resposta").innerText = "Sexta-feira"
}

else if(diadasemana == 6) {
    document.getElementById("resposta").innerText = "Sabado"
}

else if(diadasemana == 7) {
    document.getElementById("resposta").innerText = "Domingo"
}
