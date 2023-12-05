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
    const trs = [];
    for (const names of users) {
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
    tbody.innerHTML = trs.join("");
}
export {};
