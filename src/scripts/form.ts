import '../assets/scss/main.scss';
import { IDeparts } from './type';

async function loadDeparts() {
  const resp = await fetch('http://127.0.0.1:3500/departamentos');
  const departs = await resp.json();
  console.log(departs);
  createDeptList(departs);
}
loadDeparts();

function createDeptList(depart: IDeparts[]) {
  let lis = [];

  for (const dpt of depart) {
    lis.push(`
        <li>
          <label for="checks">
            <input type="checkbox" value="${dpt.id}" />${dpt.nome}
        </label>
        `);

    const lista = document.querySelector('.departamentos');
    lista!.innerHTML = lis.join('');
  }
}
