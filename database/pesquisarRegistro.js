
//RESOLVER SAPOHA AMANHÃ

const conexaoBase = require("./conexaoBase");

function ProcurarColecaoBase(nome2){

    var funcao = async function ProcurarColecao(nome, client) {
        result = await client.db("bancoteste").collection("medicos").findOne({"nome": `${nome}`});

        if (result != undefined) {
            console.log(`Lista encontrada com o nome: '${nome}':`);
            console.log(result);
            console.log(result.nome);
        } else {
            console.log(`Nenhuma lista foi encontrada com o nome: '${nome}'`);
        };
        return result.nome
    };
    ProcurarColecao(nome = nome2)
    conexaoBase.ConectarBase(funcao);
};

ProcurarColecaoBase(nome='horlando');



/* _id
:
"123111"
nome
:
"medico do caralho"
 */