import {IUserList } from "./type"

let users = [];

async function loadNames() {
    const resp = await fetch ("http://127.0.0.1:3500/usuarios");
    users = await resp.json();
    console.log(users);  
    createNameList(users)
}

loadNames()

function createNameList(users:IUserList[]){
const tbody = document.querySelector("tbody");
const trs = [];
    for (const names of users){
        const tr = `
        <tr>
            <td><a href="user.html?id=${names.id}">${names.nome} ${names.sobrenome}</a></td>
            <td>${names.cpf}</a></td>
            <td>${names.sexo}</a></td>
            <td>${names.email}</a></td>
            <td>
                <button class="btn_edit">Editar</button>
                <button class="btn_delete">Excluir</button>
            </td>
        </tr>
        `;

        trs.push(tr);
    }
    tbody!.innerHTML = trs.join("");
}
