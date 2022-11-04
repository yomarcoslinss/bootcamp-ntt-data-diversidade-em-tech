"use strict";
/*
*
* VARIAVEIS
*
*/
// Tipos primitivos: boolean, number, string.
let ligado = false;
let nome = "Marcos Linss";
let idade = 19;
let altura = 1.7;
// Tipos especiais: null, undefined. 
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any (qualquer coisa), void (vazio / não retorna nada).
let retorno;
let retornoView = true;
/*
*
* OBJETOS
*
*/
// Objeto - Sem previsibilidade.
let produto = {
    name: "Marcos",
    cidade: "Santa Isabel",
    idade: 19
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.90,
    unidades: 5,
};
/*
*
* ARRAYS
*
*/
// Maneiras de declarar uma array no TS.
let dados = ["Marcos", "Maiara", "Manteiguinha"];
let dados2 = ["Marcos", "Maiara", "Manteiguinha"];
// Array de Multi Types.
let infos = ["Marcos", 19, "Maiara", 28, "Manteiguinha", 0]; // Essa array, pode receber 2 tipos primitivos (string e número)
/*
*
* TUPLAS
*
*/
// Tupla é um vetor de multiplos tipos (assim como a array multi type), porém é necessario seguir a ordem exata dos tipos definidos
let boleto = ["conta agua", 199.90, 12344321];
/*
*
* DATAS
*
*/
let aniversaio = new Date("2022-12-01 05:00");
console.log(aniversaio.toString());
