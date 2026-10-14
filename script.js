    export let usersHTML = document.getElementById("users");
    export let formulario = document.getElementById("form");
    export let users = [];
    export let select = window.document.getElementById("filtro");
    import { carregarUsers } from './carregarUsers.js';
    import { enviarUser } from './enviarUsers.js';
    import './psqsar.js';
    carregarUsers();
    
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = document.getElementById("nome").value.trim();
      let username = document.getElementById("username").value.trim();
      let email = document.getElementById("email").value.trim();
      if (name == "" || username == "" || email == "") {
        alert("Erro preenche todos os campos");
      } else {
        let dados = new FormData(formulario);
        //dados.append('id', users.at(-1).id + 1);
        enviarUser(dados);
        formulario.reset()
      }
    });