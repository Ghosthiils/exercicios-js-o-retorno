let contatos = []

let umVinicius = {
    nome:'Vinicius',
    telefone: '199999990',
    email: 'vini@gmail.com',
    foto:'v.jpg'
    
}
let umGuto = {
    nome:'Guto',
    telefone: '1999997790',
    email: 'guto@gmail.com',
    foto:'g.jpg'
    
}



function fnSalvar(){
    let umContato = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        foto: document.getElementById('foto').value

        
    }
    contatos.push(umContato)

    console.dir(contatos)
}

function fnListar(){
    let dados =""
    contatos.forEach(function(umContato,i){
        dados +=
    
    `<div class="card" style="width: 18rem;">
  <img src="${umContato.foto}" class="card-img-top" alt="${umContato.nome}">
  <div class="card-body">
    <h5 class="card-title">${umContato.nome}</h5>
    <p class="card-text">${umContato.telefone} - ${umContato.email} </p>
    <a href="#" class="btn btn-danger">Excluir</a>
  </div>
</div>`
    })

  

        
    }

    document.getElementById('listaDeContatos').innerHTML = dados


    }



function fnExcluir(){}


   


document.getElementById("btSalvar").addEventListener("click", function() {
    fnSalvar()
    fnListar()
})