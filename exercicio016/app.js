function calcular() {
    const valorConta = parseFloat(document.getElementById("valorConta").value);
    const percentual = parseFloat(document.getElementById("valorPercentual").value);
    const funcao = document.getElementById("funcao").value;
    const resultado = document.getElementById("resultado");

    
    

    let valorFinal;

    if (funcao === "desconto") {
      valorFinal = valorConta - (valorConta * (percentual / 100));
    } else {
      valorFinal = valorConta + (valorConta * (percentual / 100));
    }

    
}