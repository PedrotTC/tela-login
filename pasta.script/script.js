let btnOlho = document.querySelector(".fa-eye");
let inputSenha = document.querySelector("#senha");
let inputEmailLogin = document.querySelector("#email");
inputEmailLogin.focus();
btnOlho.addEventListener("click", () => {
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
    btnOlho.style.color = "white";
  } else {
    inputSenha.setAttribute("type", "password");
    btnOlho.style.color = "";
  }
});

function entrar() {
  let inputSenhaLogin = document.querySelector("#senha");
  let labelSenhaLogin = document.querySelector("#labelSenhaLogin");

  let labelEmailLogin = document.querySelector("#labelEmailLogin");

  let msgErrorLogin = document.querySelector("#msgError");
  inputEmailLogin.focus();

  let listaUser = [];

  let userValid = {
    nome: "",
    email: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (
      inputEmailLogin.value == item.emailCad &&
      inputSenhaLogin.value == item.senhaCad
    ) {
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad,
      };
    }
  });

  if (
    inputEmailLogin.value == userValid.email &&
    inputSenhaLogin.value == userValid.senha
  ) {
    if (inputEmailLogin.value != "" && inputSenhaLogin.value != "") {
      window.location.href = "http://127.0.0.1:5500/index3.html";
    }

    let token = Math.random().toString(16).substring(2);

    localStorage.setItem("token", token);

    localStorage.setItem("userLogado", JSON.stringify(userValid));
  } else {
    inputEmailLogin.style.borderColor = "red";
    labelEmailLogin.style.color = "red";
    inputSenhaLogin.style.borderColor = "red";
    labelSenhaLogin.style.color = "red";
    msgErrorLogin.textContent = "E-mail ou senha esta incorreta";
    msgErrorLogin.style.display = "block";

    inputEmailLogin.focus();
  }
}
