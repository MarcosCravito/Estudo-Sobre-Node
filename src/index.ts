import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import matematica from './matematica'
import filmes from './filmes'

let nome: String ='Rodrigo';
let idade: number = 10;

console.log(`my name is ${nome} and ${idade} years old.`);

console.log(validator.isEmail("fulaninho@hotmail.com"));

//VALIDAR IP
let ip = '192.168.0.1'
console.log(validator.isIP(ip));


//usando matematica.ts

let n1: number = 10;
let n2: number = 20;

console.log(`Soma: ${matematica.somar(n1,n2)}`);

console.log(`Divisao: ${matematica.dividir(n1,n2)}`);

console.log(`Multiplicacao: ${matematica.multiplicar(n1,n2)}`);


//exibir a lista de filmes

console.log(`Lista filmes ${filmes}`);