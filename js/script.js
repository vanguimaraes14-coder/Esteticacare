function mostrarMensagem() {
  document.getElementById("agendamento").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("formAgendamento").addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  document.getElementById("mensagem").textContent =
    nome + ", seu agendamento foi registrado com sucesso!";
  this.reset();
});