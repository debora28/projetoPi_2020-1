const conexaoBase = require("./conexaoBase");


function criarListaBase(novoMedico){
    const funcao = async function criarLista(client) {
        const result = await client.db("bancoteste").collection("medicos").insertOne(novoMedico);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    };
    conexaoBase.ConectarBase(funcao);
};

exports.criarListaBase = criarListaBase;

let novoMedico = {
    _id : "11111111" ,
    nome : "teste2"
};
criarListaBase(novoMedico)
/* 
#PARAMETRO A SER PASSADO#
let novoMedico = {
    _id : "12311122" ,
    nome : "medico do caralho"
}; 

#FUNCAO COM PARAMETRO#
criarListaBase(novoMedico);
*/ 


