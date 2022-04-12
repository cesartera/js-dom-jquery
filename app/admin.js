console.log("Script do Admin está funcionando!");

// console.log(document.querySelector('h1'));

// let minhaUl = document.createElement('ul');
// console.log(minhaUl);

// let minhaLi = document.createElement('li');
// console.log(minhaLi);
// minhaLi.innerText = "Fire Stick";
// console.log(minhaLi);
// console.log(minhaUl);

//Adicionando minhaLi como Subelemento de minhaUl
// minhaUl.appendChild(minhaLi);
// console.log(minhaUl);

//Adicionar minhaUl ao Body;
// document.body.appendChild(minhaUl);

/*RECEITINHA DE BOLO
1- Crio o elemento com o document.createElement()
2- Altero o elemento / Adiciono o texto, ou indormações que eu queira.
3- Adicionar o elemento ao DOM com o appendChild
*/


//RENDERIZAR UMA LISTA

//Dados
const produtos = [
    {    
        id: "prod001",
        nome : "Fire Stick",
        preco: 360.05,
        cor: "preto",
        imagem: "fire-stick.jpg",
        descricao: "Fire TV Stick | Streaming em Full HD com Alexa | Com Controle Remoto por Voz com Alexa (inclui comandos de TV)"
    },
    {
        id: "prod002",
        nome : "Kindle",
        preco: 299.05,
        cor: "preto",
        imagem: "kindle.jpg",
        descricao: "Kindle 10a. geração com bateria de longa duração - Cor Preta"
    },
    {
        id: "prod003",
        nome : "Capa Kindle",
        preco: 69,
        cor: "preto",
        imagem: "capa-kindle.jpg",
        descricao: "Capa de tecido resistente à água para Kindle Paperwhite (10ª Geração não compatível com as versões anteriores do Kindle Paperwhite ou com 11ª Geração lançada em 2021) - Cor Azul"
    },
    {
        id: "prod004",
        nome : "Echo Dot",
        preco: 270.55,
        cor: "preto",
        imagem: "echo-dot.jpg",
        descricao: "Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta"       
    }
]


//Popular o DOM com estes produtos
let galeriaDeProdutos = document.createElement('div');
galeriaDeProdutos.setAttribute('id', 'galeria-de-produtos');
document.body.appendChild(galeriaDeProdutos);

for(i=0; i<produtos.length; i++){
    let divProduto = document.createElement('div');
    divProduto.setAttribute('id', produtos[i].id);

    let nomeProduto = document.createElement('h3');
    nomeProduto.innerText = produtos[i].nome;
    divProduto.appendChild(nomeProduto);

    let precoProduto = document.createElement('p');
    precoProduto.innerText = `R$ ${produtos[i].preco}`;
    divProduto.appendChild(precoProduto);

    // let imagemProduto = document.createElement('img');
    // imagemProduto.innerHTML = `<img src="assets/${produtos[i].imagem}">`
    // divProduto.appendChild(imagemProduto);

    let descricaoProduto = document.createElement('p');
    descricaoProduto.innerText = produtos[i].descricao;
    divProduto.appendChild(descricaoProduto);

    galeriaDeProdutos.appendChild(divProduto);
}


