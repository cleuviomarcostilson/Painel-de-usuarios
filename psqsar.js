import { select } from './script.js';
import { users } from './script.js';
import { usersHTML } from './script.js';

export default document.addEventListener("keydown", (e) => {
      
      let campo = document
        .getElementById("campo")
        .value.trim()
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (e.key === "Enter") {
        let res = [];
        if (campo !== "") {
          if (select[0].selected) {
            //alert('Oi')
            res = users.filter((obj) =>
              obj.name
                .toLocaleLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(campo),
            );
          } else if (select[1].selected) {
            res = users.filter((obj) => obj.id == campo);
          } else {
            res = users.filter((obj) =>
              obj.email
                .toLocaleLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(campo),
            );
          }

          //alert(e.key)
          if (res.length !== 0) {
            usersHTML.innerHTML = "";
            //alert(res)
            res.forEach((element) => {
              let { id, name, username, email } = element;
              let info = document.createElement("div");
              //info.style.margin = '10px'
              info.innerHTML += `<p><strong>Nome:<strong> ${name}</p>
             <p><strong>Username:<strong> ${username}</p>
             <p><strong>Email:<strong> ${email}</p>
             <p><strong>ID:</strong> ${id}`;

              usersHTML.append(info);
            });
            usersHTML.insertAdjacentHTML(
              "beforeend",
              '<a href="Desafio01.html">Voltar</a>',
            );
          } else {
            //alert("Nehum resultado");
            usersHTML.innerHTML = '<h1 style="color: red;">Nehum resultado encontrado</h1>';
            usersHTML.insertAdjacentHTML(
              "beforeend",
              '<a href="Desafio01.html">Voltar</a>',
            );
          }
        }
      }
    });