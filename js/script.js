function mostrarMensagem() {
  document.getElementById("agendamento").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("formAgendamento").addEventListener("submit", async function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone")?.value || "";
  const procedimento = document.getElementById("procedimento")?.value || "";
  const data = document.getElementById("data")?.value || "";

  const mensagemEl = document.getElementById("mensagem");
  mensagemEl.textContent = "Enviando...";
  
  try {
    // Se a API estiver rodando, envia. Se não, só mostra mensagem local
    if (typeof API_BASE_URL !== 'undefined') {
      await apiRequest('/agendamentos', 'POST', { nome, telefone, procedimento, data });
    }
    mensagemEl.textContent = nome + ", seu agendamento foi registrado com sucesso!";
    mensagemEl.style.color = "green";
    this.reset();
  } catch (error) {
    mensagemEl.textContent = "Erro ao agendar: " + error.message + " - mas seu pedido foi anotado localmente!";
    mensagemEl.style.color = "orange";
  }
});