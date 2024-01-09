import { IUserList } from "./type";

let users = [];

const dialog = document.querySelector("#caixa") as HTMLDialogElement;
console.log(dialog);

document.querySelector(".btn-cancel")!.addEventListener("click", () => {
  dialog.close();
});

async function loadNames() {
  const resp = await fetch("http://127.0.0.1:3500/usuarios");
  users = await resp.json();
  console.log(users);
  createNameList(users);
}

loadNames();

function createNameList(users: IUserList[]) {
  const tbody = document.querySelector("tbody");
  for (const names of users) {
    const trs = document.createElement("tr");
    const innerTr = `
            <td><a href="user.html?id=${names.id}">${names.nome} ${names.sobrenome}</a></td>
            <td>${names.cpf}</a></td>
            <td>${names.sexo}</a></td>
            <td>${names.email}</a></td>
            <td>
                <button class="btn_edit">Editar</button>
                <button class="btn_delete">Excluir</button>
            </td>
        `;

    trs.innerHTML = innerTr;

    const btnExcluirDialog = trs.querySelector(
      ".btn_delete"
    ) as HTMLDialogElement;
    // console.log(btnExcluirDialog);

    if (btnExcluirDialog) {
      btnExcluirDialog.onclick = () => {
        document.querySelector(
          ".usuario"
        )!.textContent = `${names.nome} ${names.sobrenome}`;
        dialog.showModal();
      };
    }
    tbody!.appendChild(trs);
  }
}
