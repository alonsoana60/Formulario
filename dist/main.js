var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let users = [];
const dialog = document.querySelector("#caixa");
console.log(dialog);
document.querySelector(".btn-cancel").addEventListener("click", () => { dialog.close(); });
function loadNames() {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield fetch("http://127.0.0.1:3500/usuarios");
        users = yield resp.json();
        console.log(users);
        createNameList(users);
    });
}
loadNames();
function createNameList(users) {
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
        const btnExcluirDialog = trs.querySelector(".btn_delete");
        // console.log(btnExcluirDialog);
        if (btnExcluirDialog) {
            btnExcluirDialog.onclick = () => {
                document.querySelector(".usuario").textContent = `${names.nome} ${names.sobrenome}`;
                dialog.showModal();
            };
        }
        tbody.appendChild(trs);
    }
}
export {};
