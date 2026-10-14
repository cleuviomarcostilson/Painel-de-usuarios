import { users } from "./script.js";
import { usersHTML } from "./script.js";
export async function carregarUsers() {
    
      try {
        
        let base = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!base.ok) {
          throw new Error("Erro na requisição");
        }
        
        users.push(...await base.json());

        users.forEach((element) => {
          let { id, name, username, email } = element;
          let info = document.createElement("div");
          //info.style.margin = '10px'
          info.innerHTML = `<p><strong>Nome:<strong> ${name}</p>
             <p><strong>Username:<strong> ${username}</p>
             <p><strong>Email:<strong> ${email}</p>
             <p><strong>ID:</strong> ${id}`;
          usersHTML.append(info);
        });
      } catch (err) {
        alert("Algo deu errado:" + err.message);
      }
    }