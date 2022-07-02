"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissão: "desenvolvedora"
};
const andre = {
    nome: "Andre",
    idade: 25,
    profissão: "pintor"
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissão: "Desenvolvedora"
};
var Profissão;
(function (Profissão) {
    Profissão[Profissão["Professora"] = 0] = "Professora";
    Profissão[Profissão["Atriz"] = 1] = "Atriz";
    Profissão[Profissão["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissão[Profissão["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissão || (Profissão = {}));
