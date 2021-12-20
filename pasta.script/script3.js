let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");

logado.innerHTML = userLogado.email;

if (localStorage.getItem("token") == null) {
  alert("Você precisa esta logado para acessa essa pagina");
  window.location.href = "http://127.0.0.1:5500/index.html";
}

function sair() {
  localStorage.removeItem("token");

  window.location.href = "http://127.0.0.1:5500/index.html";
}
