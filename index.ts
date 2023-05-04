// Import stylesheets
import './style.css';

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
