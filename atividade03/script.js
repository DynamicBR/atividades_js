// Array de produtos disponíveis para compra
let produtos = [
    { nome: "Camiseta", preco: 50, quantidade: 10 },
    { nome: "Calça Jeans", preco: 120, quantidade: 5 },
    { nome: "Tênis", preco: 200, quantidade: 7 },
    { nome: "Jaqueta", preco: 300, quantidade: 3 },
    { nome: "Boné", preco: 40, quantidade: 15 }
];

// Array do carrinho de compras
let carrinho = [];

// Exibe os produtos disponíveis
function exibirProdutos() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Limpa a lista
    produtos.forEach((produto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${produto.nome} - R$${produto.preco} (Quantidade: ${produto.quantidade}) 
        <button onclick="adicionarAoCarrinho(${index})">Adicionar ao Carrinho</button>`;
        productList.appendChild(li);
    });
}

// Adiciona um produto ao carrinho
function adicionarAoCarrinho(index) {
    const produtoSelecionado = produtos[index];

    // Verifica se o produto ainda está em estoque
    if (produtoSelecionado.quantidade > 0) {
        carrinho.push({ nome: produtoSelecionado.nome, preco: produtoSelecionado.preco });
        produtoSelecionado.quantidade--; // Reduz a quantidade no estoque
        exibirProdutos();
        exibirCarrinho();
    } else {
        alert("Produto fora de estoque");
    }
}

// Remove um produto do carrinho
function removerDoCarrinho(index) {
    const produtoRemovido = carrinho.splice(index, 1)[0];
    // Aumenta a quantidade do produto no estoque novamente
    const produtoNoEstoque = produtos.find(produto => produto.nome === produtoRemovido.nome);
    produtoNoEstoque.quantidade++;
    exibirProdutos();
    exibirCarrinho();
}

// Exibe o carrinho de compras
function exibirCarrinho() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = ""; // Limpa a lista do carrinho
    carrinho.forEach((produto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${produto.nome} - R$${produto.preco} 
        <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        cartList.appendChild(li);
    });

    // Exibe o total
    calcularTotal();
}

// Calcula e exibe o total do carrinho
function calcularTotal() {
    const total = carrinho.reduce((acumulador, produto) => acumulador + produto.preco, 0);
    document.getElementById("total").innerHTML = `Total: R$${total}`;
}

// Ordena os produtos do carrinho por preço (ordem crescente)
function ordenarCarrinho() {
    carrinho.sort((a, b) => a.preco - b.preco);
    exibirCarrinho();
}

// Inicialização
exibirProdutos();
