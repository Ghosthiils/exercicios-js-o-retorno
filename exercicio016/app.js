function calcular() {
    
  
    const valorConta = parseFloat(document.getElementById("valorConta").value);
    const percentual = parseFloat(document.getElementById("valorPercentual").value);
    const funcao = document.getElementById("funcao").value;
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valorConta) || isNaN(percentual)) {
      resultado.textContent = "Por favor, preencha os campos";
      resultado.style.color = "red";
      return;
    }
  
    let valorFinal;
  
    if (funcao === "desconto") {
      valorFinal = valorConta - (valorConta * (percentual / 100));
    } else {
      valorFinal = valorConta + (valorConta * (percentual / 100));
    }
  
    resultado.style.color = "green";
    resultado.textContent = `Valor a pagar: R$ ${valorFinal.toFixed(2).replace(".", ",")}`;
  }
  