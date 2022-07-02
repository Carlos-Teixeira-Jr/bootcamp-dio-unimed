const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissão: "desenvolvedora"
}

const andre: { nome: string, idade: number, profissão: string} = {
  nome: "Andre",
  idade: 25,
  profissão: "pintor"
}

const paula: { nome: string, idade: number, profissão: string} = {
  nome: "Paula",
  idade: 25,
  profissão: "Desenvolvedora"
}

enum Profissão {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao: Profissão
}
