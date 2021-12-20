let btnOlho1 = document.querySelector("#verSenha");
let btnOlho2 = document.querySelector("#ConfirmeSenha");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let inputSenha = document.querySelector("#inputVerSenha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let inputConfimeSenha = document.querySelector("#inputConfimeSenha");
let labelConfirme = document.querySelector("#labelConfirme");
let validConfirmeSenha = false;

let inputEmail = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let msgError = document.querySelector("#msgError");
let msgSucesso = document.querySelector("#msgSucesso");

btnOlho1.addEventListener("click", () => {
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
    btnOlho1.style.color = "white";
  } else {
    inputSenha.setAttribute("type", "password");
    btnOlho1.style.color = "";
  }
});

btnOlho2.addEventListener("click", () => {
  if (inputConfimeSenha.getAttribute("type") == "password") {
    inputConfimeSenha.setAttribute("type", "text");
    btnOlho2.style.color = "white";
  } else {
    inputConfimeSenha.setAttribute("type", "password");
    btnOlho2.style.color = "";
  }
});

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.style.color = "red";
    labelNome.textContent = "nome* insira no minimo 3 caracteres";
    nome.style.borderColor = "red";
    validNome = false;
  } else {
    labelNome.style.color = "green";
    labelNome.textContent = "Nome";
    nome.style.borderColor = "green";
    validNome = true;
  }
});

inputSenha.addEventListener("keyup", () => {
  if (inputSenha.value.length <= 5) {
    labelSenha.style.color = "red";
    labelSenha.textContent = "senha* insira no minimo 6 caracteres";
    inputSenha.style.borderColor = "red";
    validSenha = false;
  } else {
    labelSenha.style.color = "green";
    labelSenha.textContent = "senha";
    inputSenha.style.borderColor = "green";
    validSenha = true;
  }
});

inputConfimeSenha.addEventListener("keyup", () => {
  if (inputConfimeSenha.value != inputSenha.value) {
    inputConfimeSenha.style.borderColor = "red";
    labelConfirme.textContent = "senha* esta invalida";
    labelConfirme.style.color = "red";
    validConfirmeSenha = false;
  } else {
    labelConfirme.style.color = "green";
    labelConfirme.textContent = "Confirma senha";
    inputConfimeSenha.style.borderColor = "green";
    validConfirmeSenha = true;
  }
});

inputEmail.addEventListener("keyup", () => {
  if (inputEmail.value.includes("@")) {
    labelEmail.textContent = "E-mail";
    labelEmail.style.color = "green";
    inputEmail.style.borderColor = "green";
    validEmail = true;
  } else {
    labelEmail.textContent = "insira um e-mail valido";
    labelEmail.style.color = "red";
    inputEmail.style.borderColor = "red";
    validEmail = false;
  }
});

function cadastrar() {
  if (validNome && validEmail && validSenha && validConfirmeSenha) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCad: nome.value,
      emailCad: inputEmail.value,
      senhaCad: inputSenha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSucesso.style.display = "block";
    msgError.style.display = "none";
    msgSucesso.textContent = "Cadastrando usuário...";

    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5500/index.html";
    }, 3000);
  } else {
    msgError.style.display = "block";
    msgSucesso.style.display = "none";
    msgError.textContent =
      "Preencha todos os campos corretamente antes de cadastrar";
    nome.focus();
  }
}
