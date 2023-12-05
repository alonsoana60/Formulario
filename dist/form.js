var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadDeparts() {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield fetch("http://127.0.0.1:3500/departamentos");
        const departs = yield resp.json();
        console.log(departs);
        createDeptList(departs);
    });
}
loadDeparts();
function createDeptList(depart) {
    let lis = [];
    for (const dpt of depart) {
        lis.push(`
        <li>
          <label for="checks">
            <input type="checkbox" value="${dpt.id}" />${dpt.nome}
        </label>           
        `);
        const lista = document.querySelector(".departamentos");
        lista.innerHTML = lis.join("");
    }
}
export {};
