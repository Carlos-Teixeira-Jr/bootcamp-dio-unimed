"use strict";
/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/
//Formas de rodar o comando Javascript acima em uma sintaxe Typescript sem erros de tipagem
//Forma 1: sintaxe mais simples (Javascript) sem determinar os tipos exigidos por cada propriedade
const employee1 = {
    code: 200,
    name: "Carlos"
};
//Forma2 = estabelecendo os tipos na declaração da constante
const employee2 = {
    code: 200,
    name: "Carlos"
};
const employee3 = {
    code: 10,
    name: "John"
};
//Forma 4 = usando o recurso INTERFACE e ALIAS
const employee4 = {};
employee4.code = 200;
employee4.name = "Carlos";
