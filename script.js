// script.js
const quadrinhosList = document.getElementById("quadrinhos-list");
const cadastroForm = document.getElementById("cadastro-form");

// Função para adicionar quadrinho à coleção
function adicionarQuadrinho(titulo, autor, tipo, capa) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="card">
      <img src="${capa}" alt="Capa do Quadrinho">
      <div class="card-info">
        <strong>Título:</strong> ${titulo} <br>
        <strong>Autor:</strong> ${autor} <br>
        <strong>Tipo:</strong> ${tipo}
      </div>
      <div class="card-actions">
        <button class="edit-btn" onclick="editarQuadrinho(event)"><i class="fas fa-edit"></i></button>
        <button class="delete-btn" onclick="excluirQuadrinho(event)"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `;
  quadrinhosList.appendChild(li);
}

// Função para lidar com o envio do formulário
function handleSubmit(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const tipo = document.getElementById("tipo").value;
  const capaInput = document.getElementById("capa");
  const capa = URL.createObjectURL(capaInput.files[0]);

  adicionarQuadrinho(titulo, autor, tipo, capa);

  // Limpar campos do formulário
  cadastroForm.reset();
}

// Função para editar quadrinho
function editarQuadrinho(event) {
  const card = event.currentTarget.parentNode.parentNode;
  const cardInfo = card.querySelector(".card-info");
  const titulo = cardInfo.querySelector("strong:first-child").nextSibling.nodeValue.trim();
  const autor = cardInfo.querySelector("strong:nth-child(2)").nextSibling.nodeValue.trim();
  const tipo = cardInfo.querySelector("strong:nth-child(3)").nextSibling.nodeValue.trim();

  const novoTitulo = prompt("Digite o novo título:", titulo);
  const novoAutor = prompt("Digite o novo autor:", autor);
  const novoTipo = prompt("Digite o novo tipo:", tipo);

  if (novoTitulo && novoAutor && novoTipo) {
    cardInfo.innerHTML = `
      <strong>Título:</strong> ${novoTitulo} <br>
      <strong>Autor:</strong> ${novoAutor} <br>
      <strong>Tipo:</strong> ${novoTipo}
    `;
  }
}

// Função para excluir quadrinho
function excluirQuadrinho(event) {
  const card = event.currentTarget.parentNode.parentNode;
  card.parentNode.removeChild(card);
}

// Adicionar evento de envio do formulário
cadastroForm.addEventListener("submit", handleSubmit);
