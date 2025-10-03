document.getElementById('bt-calcular').addEventListener('click', function(){
    let Salario = document.getElementById('salario').value
    let horasTrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value)
    let cargaHoraria = document.getElementById('carga-horaria').value
    let HorasExtras = fnHorasExtras(Salario, horasTrabalhadas, cargaHoraria, HorasExtras)
    document.getElementById('resposta').innerHTML =  fnformatarMonetario(HorasExtras)
})