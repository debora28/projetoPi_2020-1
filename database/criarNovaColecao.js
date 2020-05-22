const conexaoBase = require("./conexaoBase");


function criarListaBase(novoMedico, nomeFuncao="criarLista"){
    const funcao = async function criarLista(client) {
        const result = await client.db("bancoteste").collection("medicos").insertOne(novoMedico);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    };
    conexaoBase.ConectarBase(funcao, nomeFuncao);
};

exports.criarListaBase = criarListaBase;

/* 
#PARAMETRO A SER PASSADO#
let novoMedico = {
    _id : "12311122" ,
    nome : "medico do caralho"
}; 

#FUNCAO COM PARAMETRO#
criarListaBase(novoMedico);
*/ 


