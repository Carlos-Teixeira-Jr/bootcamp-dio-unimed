/*

// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

interface Person {
  name: string,
  age: number,
  profession: string
}

const person1: Person = {
  name: "maria",
  age: 29,
  profession: "actress"
}

const person2: Person = {
  name: "roberto",
  age: 19,
  profession: "Baker"
}

const person3: Person = {
  name: "laura",
  age: 32,
  profession: "Actress"
}

const person4: Person = {
  name: "carlos",
  age: 19,
  profession: "baker"
}

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)