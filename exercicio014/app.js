const time = [
    "Atlético Mineiro",
    "Bahia",
    "Botafogo",
    "Ceará",
    "Corinthians",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Mirassol",
    "Palmeiras",
    "Red Bull Bragantino",
    "Santos",
    "São Paulo",
    "Sport",
    "Vasco da Gama",
    "Vitória"
  ];

  const cidadesTimesSerieA2025 = [
    "Belo Horizonte - MG",
    "Salvador - BA",
    "Rio de Janeiro - RJ",
    "Fortaleza - CE",
    "São Paulo - SP",
    "Belo Horizonte - MG",
    "Rio de Janeiro - RJ",
    "Rio de Janeiro - RJ",
    "Fortaleza - CE",
    "Porto Alegre - RS",
    "Porto Alegre - RS",
    "Caxias do Sul - RS",
    "Mirassol - SP",
    "São Paulo - SP",
    "Bragança Paulista - SP",
    "Santos - SP",
    "São Paulo - SP",
    "Recife - PE",
    "Rio de Janeiro - RJ",
    "Salvador - BA"
  ];

function fnLista_time() {
    document.getElementById("Lista_time").innerHTML =  ` <div class="col-6 border text-center">${time[0]} - ${cidadesTimes[0]}</div> `
    
}
  fnLista_time()