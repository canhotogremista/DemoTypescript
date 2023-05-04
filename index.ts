// Import stylesheets
import './style.css';
import { Timer } from './timer';

console.log('Olá mundo');

let xy: number = -10;
console.log('O valor de xy é ' + xy);

let str: string = 'texto ' + xy;
console.log('str - ' + str);

function getNome(pessoa: { nome: string; sobrenome: string }): string {
  //return pessoa.nome + ' ' + pessoa.sobrenome;
  return `${pessoa.nome} ${pessoa.sobrenome}`;
}

console.log('O nome é ' + getNome({ nome: 'José', sobrenome: 'Silva' }));

document.getElementById('btn_pi').addEventListener('click', () => {
  let numero: number = Number(
    (<HTMLInputElement>document.getElementById('parimpar_input')).value
  );
  if (numero % 2 == 0) {
    document.getElementById('resultado_pi').innerHTML = 'Par';
  } else {
    document.getElementById('resultado_pi').innerHTML = 'Impar';
  }
});

document.getElementById('btn_tabu').addEventListener('click', () => {
  let numero: number = Number(
    (<HTMLInputElement>document.getElementById('tabuada_input')).value
  );
  const tabela = document.getElementById('resultado_tabu');
  tabela.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const linha = tabela.insertRow();
    const cel1 = linha.insertCell();
    const cel2 = linha.insertCell();
    cel1.innerHTML = `${numero} x ${i} =`;
    cel2.innerHTML = numero * i;
  }
});

document.getElementById('btn_ale').addEventListener('click', () => {
  let numero: number = Number(
    (<HTMLInputElement>document.getElementById('ale_input')).value
  );
  const tabela = document.getElementById('resultado_ale');
  tabela.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const linha = tabela.insertRow();
    const cel1 = linha.insertCell();
    const cel2 = linha.insertCell();
    cel1.innerHTML = `${i} =`;
    cel2.innerHTML = Math.trunc(Math.random() * numero);
  }
});

let temporizador = new Timer(document.getElementById('resultado_temp'));

document.getElementById('btn_temp_start').addEventListener('click', () => {
  temporizador.start();
});

document.getElementById('btn_temp_stop').addEventListener('click', () => {
  temporizador.stop();
});
