let contatos = []

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
        dados += `
        <div class="card" style="width: 18rem;">
        <img src="${umContato.foto}" class="card-img-top" alt="${umContato.nome}">
        <div class="card-body">
            <h5 class="card-title">${umContato.nome}</h5>
            <p class="card-text">${umContato.telefone} -  ${umContato.email}</p>
            <button type="button" onclick='fnExcluir(${i})' class="btn btn-danger">excluir</button>
 
        </div>
        </div>
        
        `
})

document.getElementById(`listaDeContatos`).innerHTML = dados
}

function fnExcluir(indice){
    contatos.splice(indice,1)
    fnListar()
}


function fnLimpar(){
    document.getElementById('formulario').reset()

    }

document.getElementById('btSalvar').addEventListener('click',function(){
    fnSalvar()
    fnListar()
    fnLimpar()
})