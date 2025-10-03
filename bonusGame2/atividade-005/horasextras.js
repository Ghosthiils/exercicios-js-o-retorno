function fnHorasExtras(Salario, horasTrabalhadas, cargaHoraria, HorasExtras) {
    let HorasExtras= 0
    if(Salario > 0){
        return 'todos os valores devem ser positivos'
    }
    
    

    if(horasTrabalhadas > cargaHoraria){
        HorasExtras = (horasTrabalhadas - cargaHoraria) * Salario
        console.log(Salario , horasTrabalhadas, cargaHoraria, HorasExtras)
    }

    return HorasExtras
}