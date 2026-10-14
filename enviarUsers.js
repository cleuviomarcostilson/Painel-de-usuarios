import { usersHTML } from "./script.js";
import { users } from "./script.js";
export async function enviarUser(data) {
      try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      let resposta = await response.json();
      
      //alert(resposta)
      let { name, email, username, id } = resposta;
      let info = document.createElement("div");
      //info.style.margin = '10px'
      info.innerHTML = `<p><strong>Nome:<strong> ${name}</p>
             <p><strong>Username:<strong> ${username}</p>
             <p><strong>Email:<strong> ${email}</p>
             <p><strong>ID:</strong> ${id}`;
      usersHTML.append(info);
      users.push(resposta);
      }
      catch(err){
        alert('Algo deu errado: ' + err.message)
      }
    }