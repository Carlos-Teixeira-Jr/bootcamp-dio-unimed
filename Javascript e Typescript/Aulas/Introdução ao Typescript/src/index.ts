/* ESPECIFICAÇÃO DE TIPAGEM

function soma(a:number,b: number){
  return a + b;
}

soma("a", "b") */

/* INTERFACE

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: "Elefante",
  tipo: "terrestre",
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

animal.executarRugido("s")

const felino: IFelino = {
  nome: "Leão",
  tipo: "terrestre",
  visaoNoturna: true,
}

*/

/* TYPES

type IAnimal = {
  nome: string;
  tipo: "terrestre" | "aquático";
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: "pequeno" |"medio" | "grande",
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: "cachorro",
  porte: "medio",
  tipo: "terrestre",
}
*/

/* AS

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});

*/

/*GENERIC TYPES

function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], "d");

*/

/* IN

  interface IUsuario {
    id: string;
    email: string;
  }

  interface IAdmin extends IUsuario {
    cargo: "gerente" | "coordenador" | "supervisor";
  }

  function redirecione(usuario: IUsuario | IAdmin) {
    if ("cargo" in usuario) {
      //redirecionar para a área de administração
    }

    //redirecionar para a área de usuário

  }

  */

  /* USANDO OPCIONAIS "?"

  interface IUsuario {
    id: string;
    email: string;
    cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario";
  }

  function redirecione(usuario: IUsuario | IAdmin) {
    if (usuario.cargo) {
      //redirecionar(usuario.cargo)
    }

    //redirecionar para a área do usuário
  }
*/

/*RECURSO READONLY

interface Cachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements Cachorro {
  idade;
  nome;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro("Apolo", 14);

*/

import $ from "jquery";

$.fn.extend({
  novaFuncao(){
    console.log("Chamou nova função");
  }
});

$("body").novaFuncao();