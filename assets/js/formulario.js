document.getElementById("formContato").addEventListener("submit", function(event){
  event.preventDefault(); // evita recarregar a página

  // coleta os dados do formulário
  const formData = new FormData(this);

  // envia via fetch para um backend (ex: PHP, Node etc.)
  fetch("processa.php", { // troque pelo seu endpoint
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("resposta").innerHTML = 
      `<div class="alert alert-success">✅ ${data}</div>`;
  })
  .catch(err => {
    document.getElementById("resposta").innerHTML = 
      `<div class="alert alert-danger">❌ Erro ao enviar: ${err}</div>`;
  });
});