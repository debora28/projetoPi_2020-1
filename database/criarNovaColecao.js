const conexaoBase = require("./conexaoBase");

var nomeFuncao = 'criarLista';
var novoMedico = {
    _id : "123123123" ,
    nome : "teste horlando"
};

const funcao = async function criarLista(client, newListing) {
    const result = await client.db("bancoteste").collection("medicos").insertOne(novoMedico);
    console.log(`New listing created with the following id: ${result.insertedId}`);
};
conexaoBase.ConectarBase(funcao, nomeFuncao);
//criarLista();